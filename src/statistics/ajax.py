import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_cause_count_operations_by_two_types(request, id_cause, operation_type_one, operation_type_two, time_unit):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_cause_count_operations_by_two_types(access_token, id_cause, operation_type_one, operation_type_two, time_unit)
        return json.dumps(result)
    
@dajaxice_register
def dajax_post_count_operations_by_two_types(request, post_destination, operation_type_one, operation_type_two, time_unit):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_post_count_operations_by_two_types(access_token, post_destination, operation_type_one, operation_type_two, time_unit)
        return json.dumps(result)    