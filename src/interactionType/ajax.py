import json
from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax
from services import *

@dajaxice_register
def dajax_interaction_type_find_all(request):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_interaction_type_find_all(access_token)
        return json.dumps(result)
    
@dajaxice_register
def dajax_interaction_update(request, interactions):
    if 'user_session' in request.COOKIES:
        access_token = request.COOKIES['access_token']
        result = service_interaction_update(access_token, interactions)
        return json.dumps(result)