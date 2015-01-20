import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_scope_find_all(request,status,name_filter, page_number, page_size):
    access_token = request.COOKIES['access_token']
    result = service_scope_find_all(access_token,status,name_filter,page_number, page_size)
    return json.dumps(result)

@dajaxice_register
def dajax_scope_register(request, scope, with_resource ,resource):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_scope_register(access_token,scope,with_resource,resource)
        return json.dumps(result)
    
@dajaxice_register
def dajax_scope_update(request, scope, with_resource, resource):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_scope_update(access_token,scope,with_resource,resource)
        return json.dumps(result)
    
@dajaxice_register
def dajax_scope_update_status(request, id_scope, status):
    access_token = request.COOKIES['access_token']
    result = service_scope_update_status(access_token, id_scope,status)
    return json.dumps(result)