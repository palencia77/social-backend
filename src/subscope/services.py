import json
import requests
from heybeesbackend.settings import URL_SERVICES

'''
@summary: Service that get resource by id
@param access_token, id_scope
'''
def service_subcopes_get_by_scope(access_token, id_scope,status,name_filter, page_number, page_size):
    url = URL_SERVICES + "/scope/sub_scopes/find"
    params = {'access_token' : access_token,
              'id_scope': id_scope,
              'status':status,
              'name_filter':name_filter,
              'page_number' : page_number,
              'page_size' : page_size
              }    
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        return Error_Handler(result.status_code)

'''
@summary: Service that register a new subscope
@param access_token,subscope
@param with_resource,resource
'''
def service_subscope_register(access_token,id_scope,subscope,with_resource,resource):
    url = URL_SERVICES + "/subscope/register"
    json_data = {
                'access_token': access_token,
                'id_scope':id_scope,
                'name': subscope['name'],
                'description': subscope['description'],
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
@summary: Service that update a scope
@param access_token, subcope
@param with_resource,resource
'''
def service_subscope_update(access_token,id_scope,subscope,with_resource,resource):
    url = URL_SERVICES + "/subscope/update"
    json_data = {
                'access_token': access_token,
                'id_scope': id_scope,
                'id_subscope': subscope['id_subscope'],
                'name': subscope['name'],
                'description': subscope['description'],
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

def Error_Handler(status_error):
    if status_error == 400:
        return {"error":"Error en datos enviados"}
    elif status_error == 500:
        return {"error":"Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error":("Ocurrio un error ({0})".format(status_error))} 