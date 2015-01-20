import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_user_register(request, data): 
    access_token = request.COOKIES['access_token']
    result = service_user_register(access_token, data)
    return json.dumps(result)

@dajaxice_register
def dajax_user_update_password(request, old_password, new_password):
    access_token = request.COOKIES['access_token']
    id_user = request.COOKIES['id_user']
    result = service_user_update_password(access_token,id_user, old_password,new_password)
    return json.dumps(result)
 
@dajaxice_register
def dajax_user_update(request, data):
    access_token = request.COOKIES['access_token']
    result = service_user_update(access_token,data)
    return json.dumps(result)
  
@dajaxice_register
def dajax_user_update_status(request, id_user,status):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_user_update_status(access_token, id_user,status)
        return json.dumps(result)
            
@dajaxice_register
def dajax_user_find_all(request,status,name_filter, page_number, page_size):
    access_token = request.COOKIES['access_token']
    result = service_user_find_all(access_token, status,name_filter, page_number, page_size)
    return json.dumps(result)

@dajaxice_register
def dajax_user_find_by_id(request):
    id_user = request.COOKIES['id_user']
    access_token = request.COOKIES['access_token']
    result = service_user_find_by_id(access_token,id_user)
    return json.dumps(result)