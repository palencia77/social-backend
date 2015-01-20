import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_post_find_by_bee(request, id_bee, page_number, page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_post_find_by_bee(access_token, id_bee, page_number, page_size)
        return json.dumps(result)
    
@dajaxice_register
def dajax_post_save(request, data, id_bee, with_resource, resources):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_post_save(access_token, data, id_bee, with_resource, resources)
        return json.dumps(result)

@dajaxice_register
def dajax_post_remove(request, id_post, id_bee):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_post_remove(access_token, id_post, id_bee)
        return json.dumps(result)
    
@dajaxice_register
def dajax_post_update(request, data, id_bee, resources_to_remove, resources_to_add, with_resource):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_post_update(access_token, data, id_bee, resources_to_remove, resources_to_add, with_resource)
        return json.dumps(result)
    
@dajaxice_register
def dajax_post_find_by_id(request, id_post):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_post_find_by_id(access_token,id_post)
        return json.dumps(result)