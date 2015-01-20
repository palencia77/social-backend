from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.template import loader, Context
from services import *

# Create your views here.
'''
@summary:
@param access_token,id_user, name,description,risk_classification
@param goal,love_goal, beneficiary,start_date, closing_date: 
'''
def partner_list_init(request):
    try:
        if not 'user_session' in request.COOKIES:
            return HttpResponseRedirect('/user/login') 
              
        context = RequestContext(request,{'name':json.loads(request.COOKIES["full_name"]),'avatar_src':request.COOKIES["avatar_src"]})
        return HttpResponse(loader.get_template("partner/partner_list.html").render(context))   
      
    except Exception, e:
        error = "Error desconocido"
        print e
