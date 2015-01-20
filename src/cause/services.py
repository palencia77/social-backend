import json
import requests
from heybeesbackend.settings import URL_SERVICES, APP_TYPE

'''
@summary: 
@param data of cause
'''
def service_cause_register(access_token, id_bee, data):
    url = URL_SERVICES + "/cause/register"
    data['access_token'] = access_token
                
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {"error": e}
    
'''
@summary: 
@param data of cause
'''
def service_cause_update(access_token, id_bee, data):
    url = URL_SERVICES + "/cause/update"
    data['access_token'] = access_token
                
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {"error": e}   
    
'''
@summary: 
@param id_cause
@param status: 
'''
def service_cause_update_status(access_token, id_cause, status):
    url = URL_SERVICES + "/cause/update/status"
    data={}
    data['access_token'] = access_token
    data['id_cause'] = id_cause
    data ['status'] = status
                
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {"error": e}        
    
def service_cause_find_all(access_token, status,name_filter, page_number, page_size):
    url = URL_SERVICES + "/cause/status/find"
    params = {'access_token':access_token, 'status': status, 'page_number': page_number, 'page_size': page_size, 'name_filter':name_filter, 'app':APP_TYPE}
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
        else:
            return Error_Handler(result.status_code)
    except Exception as e:
        return e
    
'''
@summary: 
@param id_cause
@param partners_to_add, partners_to_remove
'''
def service_cause_update_partners_association(access_token, id_cause,partners_to_remove,partners_to_add):
    url = URL_SERVICES + "/cause/update/partners"
    data={}
    data['access_token'] = access_token
    data['id_cause'] = id_cause
    data ['partners_to_remove'] = partners_to_remove
    data ['partners_to_add'] = partners_to_add  
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {"error": e} 
    
'''
@summary: Service that update the celebrities associated to a cause
@param id_cause
@param celebrities_to_add, celebrities_to_remove
'''
def service_cause_update_celebrities_association(access_token, id_cause,celebrities_to_remove,celebrities_to_add):
    url = URL_SERVICES + "/cause/update/celebrities"
    data={}
    data['access_token'] = access_token
    data['id_cause'] = id_cause
    data ['celebrities_to_remove'] = celebrities_to_remove
    data ['celebrities_to_add'] = celebrities_to_add    
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {"error": e} 
    
'''
@summary: Service that update the awards associated to a cause
@param id_cause
@param awards_to_add, awards_to_remove
'''
def service_cause_update_awards_association(access_token, id_cause,awards_to_remove,awards_to_add):
    url = URL_SERVICES + "/cause/update/awards"
    data={}
    data['access_token'] = access_token
    data['id_cause'] = id_cause
    data ['awards_to_remove'] = awards_to_remove
    data ['awards_to_add'] = awards_to_add    
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return Error_Handler(r.status_code)
    except Exception as e:
        return {"error": e}

def Error_Handler(status_error):
    if status_error == 400:
        return {"error":"Error en datos enviados"}
    elif status_error == 500:
        return {"error":"Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error":("Ocurrio un error ({0})".format(status_error))} 
