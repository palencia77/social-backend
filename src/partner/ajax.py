import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_partner_find_all(request, status, name_filter, page_number, page_size):
    access_token = request.COOKIES['access_token']
    result = service_partner_find_all(access_token, status,name_filter, page_number, page_size)
    return json.dumps(result)

@dajaxice_register
def dajax_partner_register(request, partner):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_partner_register(access_token, partner)
        return json.dumps(result)
     
@dajaxice_register
def dajax_partner_update(request, partner):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_partner_update(access_token,partner)
        return json.dumps(result)

@dajaxice_register
def dajax_partner_update_status(request, id_partner,status):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_partner_update_status(access_token, id_partner,status)
        return json.dumps(result)
    
@dajaxice_register
def dajax_partner_cause_association_find(request,id_cause,associated,name_filter,page_number,page_size):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_partner_cause_association_find(access_token,id_cause,associated,name_filter,page_number,page_size)
        return json.dumps(result)