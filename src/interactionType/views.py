from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext
from services import *
from django.template import loader, Context
import json

# Create your views here.

'''
@summary: 
@param 
'''        
def interaction_list_init(request):
    try:
        if not 'user_session' in request.COOKIES:
            return HttpResponseRedirect('/user/login')
        context = RequestContext(request,{'name':json.loads(request.COOKIES["full_name"]),'avatar_src':request.COOKIES["avatar_src"]})
        return HttpResponse(loader.get_template("interaction/interactionType.html").render(context))
    except Exception, e:
        error = e