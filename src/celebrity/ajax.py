import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_celebrity_find_all(request, status,name_filter, page_number, page_size):
    access_token = request.COOKIES['access_token']
    result = service_celebrity_find_all(access_token,status,name_filter, page_number, page_size)
    return json.dumps(result)

@dajaxice_register
def dajax_celebrity_register(request, celebrity):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_celebrity_register(access_token, celebrity)
        return json.dumps(result)
     
@dajaxice_register
def dajax_celebrity_update(request, celebrity):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_celebrity_update(access_token,celebrity)
        return json.dumps(result)

@dajaxice_register
def dajax_celebrity_update_status(request, id_celebrity,status):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_celebrity_update_status(access_token, id_celebrity,status)
        return json.dumps(result)
    
@dajaxice_register
def dajax_celebrity_find_cause_association(request, id_cause,associated,name_filter,page_number,page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_celebrity_find_cause_association(access_token,id_cause,associated,name_filter,page_number,page_size)
        return json.dumps(result)