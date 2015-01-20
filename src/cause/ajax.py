import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_cause_register(request, data): 
    access_token = request.COOKIES['access_token']
    id_bee = request.COOKIES['id_bee'] 
    result = service_cause_register(access_token, id_bee, data)
    return json.dumps(result)

@dajaxice_register
def dajax_cause_update(request, data):
    access_token = request.COOKIES['access_token']
    id_bee = request.COOKIES['id_bee'] 
    result = service_cause_update(access_token, id_bee,data)
    return json.dumps(result)

@dajaxice_register
def dajax_cause_update_status(request, id_cause, status):
    access_token = request.COOKIES['access_token']
    result = service_cause_update_status(access_token, id_cause,status)
    return json.dumps(result)
            
@dajaxice_register
def dajax_cause_find_all(request,status,name_filter, page_number, page_size):
    access_token = request.COOKIES['access_token']
    result = service_cause_find_all(access_token, status,name_filter, page_number, page_size)
    return json.dumps(result)

@dajaxice_register
def dajax_cause_update_partners_association(request, id_cause, partners_to_remove, partners_to_add):
    access_token = request.COOKIES['access_token']
    result = service_cause_update_partners_association(access_token, id_cause,partners_to_remove,partners_to_add)
    return json.dumps(result)

@dajaxice_register
def dajax_cause_update_celebrities_association(request, id_cause, celebrities_to_remove, celebrities_to_add):
    access_token = request.COOKIES['access_token']
    result = service_cause_update_celebrities_association(access_token, id_cause,celebrities_to_remove,celebrities_to_add)
    return json.dumps(result) 

@dajaxice_register
def dajax_cause_update_awards_association(request, id_cause, awards_to_remove, awards_to_add):
    access_token = request.COOKIES['access_token']
    result = service_cause_update_awards_association(access_token, id_cause,awards_to_remove,awards_to_add)
    return json.dumps(result) 