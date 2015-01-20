import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *
           
@dajaxice_register
def dajax_resource_get_by_id(request, id_resource):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_resource_get_by_id(access_token, id_resource) 
        return json.dumps(result)

@dajaxice_register
def dajax_resource_get_by_post(request, id_post, page_number, page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_resource_get_by_post(access_token, id_post, page_number, page_size) 
        return json.dumps(result)
    
@dajaxice_register
def dajax_resource_get_by_award(request, id_award, page_number, page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_resource_get_by_award(access_token, id_award, page_number, page_size) 
        return json.dumps(result)