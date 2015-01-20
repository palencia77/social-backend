import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_award_find_by_bee(request, id_bee,status, page_number, page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_award_find_by_bee(access_token, id_bee,status, page_number, page_size)
        return json.dumps(result)
    
@dajaxice_register
def dajax_award_save(request, data, id_bee, with_resource, resources):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_award_save(access_token, data, id_bee, with_resource, resources)
        return json.dumps(result)

@dajaxice_register
def dajax_award_update_status(request, id_award, id_bee, status):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_award_update_status(access_token, id_award, id_bee, status)
        return json.dumps(result)
    
@dajaxice_register
def dajax_award_update(request, data, id_bee, resources_to_remove, resources_to_add, with_resource):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_award_update(access_token, data, id_bee, resources_to_remove, resources_to_add, with_resource)
        return json.dumps(result)
    
@dajaxice_register
def dajax_award_find_by_id(request, id_award):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_award_find_by_id(access_token,id_award)
        return json.dumps(result)
    
@dajaxice_register
def dajax_award_bee_association_find(request,id_bee,associated,name_filter,page_number,page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_award_cause_association_find(access_token,id_bee,associated,name_filter,page_number,page_size)
        return json.dumps(result)