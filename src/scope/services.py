import json
import requests
from backend.settings import URL_SERVICES

'''
@summary: Service that get all scopes
@param access_token,page_number, page_size
@param with_subscopes
'''
def service_scope_find_all(access_token,status,name_filter, page_number=1,page_size=10):
    url = URL_SERVICES + "/scope/all"
    params = {'access_token' : access_token,
              'name_filter' : name_filter,
              'status' : status,
              'page_number' : page_number,
              'page_size' : page_size,
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        print e
    return Error_Handler(result.status_code)
    
'''
@summary: Service that register a new scope
@param access_token,scope
@param with_resource,resource
'''
def service_scope_register(access_token,scope,with_resource,resource=None):
    url = URL_SERVICES + "/scope/register"
    json_data = {
                'access_token': access_token,
                'name': scope['name'],
                'description': scope['description'],
                'color':scope['color'],
                'activation_date': None,
                'closing_date': None,
                'with_resource': with_resource,
                'resource': resource
                }
    try:
        r = requests.post(url, data=json.dumps(json_data))
        if r.status_code==200:
            print r.json()
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {'error':e}

'''
@summary: Service that update a scope
@param access_token, scope
@param with_resource,resource
'''
def service_scope_update(access_token,scope,with_resource,resource=None):
    url = URL_SERVICES + "/scope/update"
    json_data = {
                'access_token': access_token,
                'id_scope': scope['id_scope'],
                'name': scope['name'],
                'description': scope['description'],
                 'color':scope['color'],
                'activation_date': None,
                'closing_date': None,
                'with_resource': with_resource,
                'resource': resource
                }
    try:
        r = requests.post(url, data=json.dumps(json_data))
        if r.status_code==200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {'error':e}
   
'''
@summary: update status of scope
@param id_cause
@param status: 
'''
def service_scope_update_status(access_token, id_scope, status):
    url = URL_SERVICES + "/scope/update/status"
    data={}
    data['access_token'] = access_token
    data['id_scope'] = id_scope
    data ['status'] = status
                
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return e     

def Error_Handler(status_error):
    if status_error == 400:
        return {"error":"Error en datos enviados"}
    elif status_error == 500:
        return {"error":"Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error":("Ocurrio un error ({0})".format(status_error))} 
