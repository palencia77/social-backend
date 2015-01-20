from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext
from services import *
from django.template import loader, Context


'''
@summary: 
@param 
'''        
def cause_list_init(request):
    try:
        if not 'user_session' in request.COOKIES:
            return HttpResponseRedirect('/user/login')
        context = RequestContext(request,{'name':json.loads(request.COOKIES["full_name"]),'avatar_src':request.COOKIES["avatar_src"]})
        return HttpResponse(loader.get_template("cause/cause_list.html").render(context))
    except Exception, e:
        error = e