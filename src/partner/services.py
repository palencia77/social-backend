import json
import requests
from heybeesbackend.settings import URL_SERVICES

'''
@summary: Service that get all scopes
@param access_token,page_number, page_size
@param with_subscopes
'''
def service_partner_find_all(access_token,status,name_filter, page_number=1,page_size=10):
    url = URL_SERVICES + "/partner/find/all"
    params = {'access_token' : access_token,
              'status': status,
              'name_filter':name_filter,
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
@summary: Service that register a new partner
@param access_token,partner (data)
'''
def service_partner_register(access_token,data):
    url = URL_SERVICES + "/partner/register"
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
@summary: Service that update a partner
@param access_token, partner(data)
'''
def service_partner_update(access_token,data):
    url = URL_SERVICES + "/partner/update"
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
@param id_partner
@param status: 
'''
def service_partner_update_status(access_token, id_partner, status):
    url = URL_SERVICES + "/partner/update/status"
    data={}
    data['access_token'] = access_token
    data['id_partner'] = id_partner
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
@summary: 
@param id_cause
'''
def service_partner_cause_association_find(access_token, id_cause,associated,name_filter, page_number, page_size):      
    url = URL_SERVICES + "/partner/cause_association/find"
    params = {'access_token' : access_token,
              'id_cause': id_cause,
              'associated':associated,
              'name_filter':name_filter,
              'page_number': page_number,
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

def Error_Handler(status_error):
    if status_error == 400:
        return {"error":"Error en datos enviados"}
    elif status_error == 500:
        return {"error":"Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error":("Ocurrio un error ({0})".format(status_error))} 