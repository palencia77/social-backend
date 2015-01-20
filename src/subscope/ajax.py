import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *
           
@dajaxice_register
def dajax_subscopes_by_scope(request, id_scope,status,name_filter, page_number, page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_subcopes_get_by_scope(access_token, id_scope,status,name_filter, page_number, page_size)
        return json.dumps(result)

@dajaxice_register
def dajax_subscope_register(request,id_scope,subscope, with_resource, resource):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_subscope_register(access_token,id_scope,subscope,with_resource,resource)
        return json.dumps(result)

@dajaxice_register
def dajax_subscope_update(request,id_scope, subscope, with_resource, resource):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_subscope_update(access_token,id_scope,subscope,with_resource,resource)
        return json.dumps(result)