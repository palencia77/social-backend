import json
import requests
from backend.settings import URL_SERVICES

'''
@summary: Service that get all celebrities by status
@param access_token,page_number, page_size
@param with_subscopes
'''
def service_celebrity_find_all(access_token,status,name_filter, page_number=1,page_size=10):
    url = URL_SERVICES + "/celebrity/find/all"
    params = {'access_token' : access_token,
              'status': status,
              'name_filter': name_filter,
              'page_number' : page_number,
              'page_size' : page_size,
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        return Error_Handler(result.status_code)
    
'''
@summary: Service that register a new celebrity
@param access_token,celebrity (data)
'''
def service_celebrity_register(access_token,data):
    url = URL_SERVICES + "/celebrity/register"
    data['access_token'] = access_token
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code==200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {'error':e}
    
'''
@summary: Service that update a celebrity
@param access_token, celebrity(data)
'''
def service_celebrity_update(access_token,data):
    url = URL_SERVICES + "/celebrity/update"
    data['access_token'] = access_token                
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code==200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {'error':e}
    
'''
@summary: 
@param id_celebrity
@param status: 
'''
def service_celebrity_update_status(access_token, id_celebrity, status):
    url = URL_SERVICES + "/celebrity/update/status"
    data={}
    data['access_token'] = access_token
    data['id_celebrity'] = id_celebrity
    data ['status'] = status
                
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return e    
    
'''
@summary: Find all celebrities associated to the cause
@param id_cause
'''
def service_celebrity_find_cause_association(access_token, id_cause,associated,name_filter,page_number,page_size):      
    url = URL_SERVICES + "/celebrity/cause_association/find"
    params = {'access_token' : access_token,
              'id_cause': id_cause,
              'associated':associated,
              'name_filter': name_filter,
              'page_number':page_number,
              'page_size': page_size
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
        else:
            return Error_Handler(result.status_code)
    except Exception as e:
        return e   

'''
@summary: Error handler
'''
def Error_Handler(status_error):
    if status_error == 400:
        return {"error":"Error en datos enviados"}
    elif status_error == 500:
        return {"error":"Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error":("Ocurrio un error ({0})".format(status_error))} 