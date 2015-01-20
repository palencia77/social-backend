import json
import requests
from heybeesbackend.settings import URL_SERVICES, APP_TYPE

'''
@summary: Service to get all interactions
@param access_token
'''
def service_interaction_type_find_all(access_token):
    url = URL_SERVICES + "/interaction/find/all"
    params = {
              'access_token': access_token             
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        return error_handler(result.status_code)

'''
@summary: Service to remove a award of bee
@param access_token
@param id_bee
@param id_award:
@param status:
'''    
def service_interaction_update(access_token, interactions):
    url = URL_SERVICES + "/interaction/update"
    json_data = { 'access_token': access_token,
                  'interactions': interactions
                }
    try:
        r = requests.post(url, data=json.dumps(json_data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return {'error':e}
    
'''
@summary: Service to update a award of bee
@param access_token
@param id_bee
@param data:
@param resources_to_remove: 
@param resources_to_add: 
@param with_resource:
'''
def service_award_update(access_token, data, id_bee, resources_to_remove, resources_to_add, with_resource):
    url = URL_SERVICES + "/award/update"
    data['access_token'] = access_token
    data['id_bee'] = id_bee
    data['with_resource'] = with_resource
    data['resources_to_remove'] = resources_to_remove
    data['resources_to_add'] = resources_to_add
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return {'error':e}
    
'''
@summary:
@param status_error:  
'''
def error_handler(status_error):
    if status_error == 400:
        return {"error": "Error en datos enviados"}
    elif status_error == 500:
        return {"error": "Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error": "Ocurrio un error ({0})".format(status_error)}