import json
import requests
from heybeesbackend.settings import URL_SERVICES, APP_TYPE

'''
@summary: Service to get all awards of a cause
@param access_token,page_number, page_size, id_cause
@param id_cause
'''
def service_award_find_by_bee(access_token, id_bee,status, page_number=1,page_size=10):
    url = URL_SERVICES + "/find/awards/by/bee"
    params = {'access_token': access_token,
              'page_number': page_number,
              'page_size': page_size,
              'id_bee': id_bee,
              'status':status,
              'app': APP_TYPE
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        return error_handler(result.status_code)

'''
@summary: Service to save a award of bee
@param access_token
@param id_bee
@param data:
@param with_resource:
@param resource:
'''
def service_award_save(access_token, data, id_bee, with_resource, resources):
    url = URL_SERVICES + "/award/register"
    data['access_token'] = access_token
    data['id_bee'] = id_bee
    data['with_resource'] = with_resource
    data['resources'] = resources
    
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return {'error':e}

'''
@summary: Service to remove a award of bee
@param access_token
@param id_bee
@param id_award:
@param status:
'''    
def service_award_update_status(access_token, id_award, id_bee, status):
    url = URL_SERVICES + "/award/update/status"
    json_data = { 'access_token': access_token,
                  'id_award': id_award,
                  'id_bee': id_bee,
                  'status':status
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
@summary: Service to find award by id
@param access_token
@param id_award
'''   
def service_award_find_by_id(access_token, id_award):
    url = URL_SERVICES + "/award/find/by_id"
    params = {'access_token':access_token, 'id_award': id_award}
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
        else:
            return error_handler(result.status_code)
    except Exception as e:
        return e
    
'''
@summary: 
@param id_cause
'''
def service_award_cause_association_find(access_token, id_bee,associated,name_filter, page_number, page_size):      
    url = URL_SERVICES + "/award/bee_association/find"
    params = {'access_token' : access_token,
              'id_bee': id_bee,
              'associated':associated,
              'app': APP_TYPE,
              'name_filter':name_filter,
              'page_number': page_number,
              'page_size': page_size
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
        else:
            return error_handler(result.status_code)
    except Exception as e:
        return e      

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