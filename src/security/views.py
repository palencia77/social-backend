from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from services import *
from django.template import loader, Context

'''
@summary: method for validating whether a user is in the session, 
          if the options menu commands, but sends the login
@param: request
'''
def base(request):
    if not 'user_session' in request.COOKIES:
        return HttpResponseRedirect('/user/login')
    else:
        return HttpResponseRedirect('/cause/')
     
'''
@summary: Method that allows valid user credentials, if correct assigned a session
@param request: 
'''
def login(request):
    if 'user_session' in request.COOKIES:
        return HttpResponseRedirect('/cause/')
    else:       
        error = None
        try:       
            if request.method == 'POST':
                if request.POST['login'] is not None and request.POST['password'] is not None:
                    result = service_user_validate(request.POST['login'], request.POST['password'])
                    if 'error' in result:                    
                        error = "Incorrect user credentials";
                        response = HttpResponseRedirect('/')
                    else:             
                        response = HttpResponseRedirect('/')
                        response.set_cookie('user_session', True)
                        response.set_cookie('id_user', result['id_user'])
                        response.set_cookie('access_token', result['access_token'])
                        response.set_cookie('id_bee', result['id_bee'])
                        response.set_cookie('full_name', json.dumps(result['full_name']))
                        if result['avatar_src'] != "":
                            response.set_cookie('avatar_src', result['avatar_src'])
                            #response.set_cookie('avatar_src', '/public/images/defaults/avatar_18x20.png')
                        else:
                            response.set_cookie('avatar_src', '/public/images/defaults/avatar_18x20.png')
                        return response
                        
                else:
                    error = "Must complete the fields"
                   
            context = RequestContext(request, {'error':error})
            return HttpResponse(loader.get_template("security/login.html").render(context))
         
        except Exception, e:
            error = "Unknown error"
        
'''
@summary: get request method that validates that the token is valid password 
to retrieve and post receives the request to update the password
@param request: 
'''
def recover_password_update(request):
    error = None
    success = "Operation performed successfully"
    context = RequestContext(request)
    try:
        if'user_session' in request.COOKIES:
            return HttpResponseRedirect('/cause/')
        else:                 
            if request.method == 'GET':
                if 'access_token' in request.GET:
                    if request.GET['access_token'] is not None:
                        access_token = request.GET['access_token']
                        result = service_recover_password_validate_token(access_token)
                        if 'error' in result:                    
                            error = result['error'] + " You can make a new request"
                            context = RequestContext(request, {'error':error})
                            return HttpResponse(loader.get_template("security/recover_password.html").render(context))
                        else:
                            response = render_to_response("security/recover_password_update.html",context)
                            response.set_cookie('access_token', request.GET['access_token'])
                            return response
                else:
                    return HttpResponseRedirect('/')                                                                                                       
            elif request.method == 'POST':
                if request.POST['password'] is not None and request.POST['confirm_password'] is not None:
                    if request.POST['password'] != request.POST['confirm_password']:
                        error = "Passwords do not match"
                        context = RequestContext(request, {'error':error})
                        return HttpResponse(loader.get_template("security/recover_password_update.html").render(context))
                    else:
                        result = service_recover_password_update_data(request.COOKIES['access_token'], request.POST['password'])
                        if 'error' in result:                    
                            error = result['error']
                            context = RequestContext(request, {'error':error})
                            return HttpResponse(loader.get_template("security/recover_password_update.html").render(context))
                        else:
                            context = RequestContext(request, {'success':success})
                            response = render_to_response("security/login.html",context)
                            response.delete_cookie('access_token')
                            return response                                 
        context = RequestContext(request, {'error':error})
        return HttpResponse(loader.get_template("security/recover_password_update.html").render(context))
       
    except Exception, e:
        error = "Unknown error" 

'''
@summary: method that receives the request to retrieve the user password 
if there is send an email to recovery
@param: request
'''
def recover_password(request):
    error = None
    if 'user_session' in request.COOKIES:
        return HttpResponseRedirect('/cause/')
    else:
        if request.method == 'POST':
            if request.POST['login'] is not None:
                result = service_recover_password_send_email(request.POST['login'])
                if 'error' in result:                    
                    error = result['error']
                    context = RequestContext(request, {'error':error})
                    return HttpResponse(loader.get_template("security/recover_password.html").render(context))
                else:
                    success = "Heybees sent you an email for your password recovery"
                    context = RequestContext(request, {'success':success})
                    response = render_to_response("security/recover_password.html",context)
                    return response
                                                     
        context = RequestContext(request)
        return HttpResponse(loader.get_template("security/recover_password.html").render(context))

'''
@summary: method that closes the user session d eun erasing all data from cookies
@param request: 
''' 
def logout(request):
    if 'user_session' in request.COOKIES:
        response = HttpResponseRedirect('/')
        response.delete_cookie('user_session')
        response.delete_cookie('id_user')
        response.delete_cookie('access_token')
        response.delete_cookie('id_bee')
        response.delete_cookie('full_name')        
        return response
        #context = RequestContext(request)
        #return HttpResponse(loader.get_template("security/login.html").render(context))
    
'''
@summary: method that sends to the main view if no user in a session
@param request: 
'''        
def user_list_init(request):
    try:
        if not 'user_session' in request.COOKIES:
            return HttpResponseRedirect('/user/login')
        context = RequestContext(request,{'name':json.loads(request.COOKIES["full_name"]),'avatar_src':request.COOKIES["avatar_src"]})
        return HttpResponse(loader.get_template("security/user_list.html").render(context))
    except Exception, e:
        error = "Error desconocido"