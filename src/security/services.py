import json
import requests
from heybeesbackend.settings import URL_SERVICES, APP_TYPE

def service_user_register(access_token, data):
    url = URL_SERVICES + "/user/register"
    data['access_token'] = access_token
    data['type'] = APP_TYPE
    data['app'] = APP_TYPE
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return {"error": str(e)}
    
def service_user_update_password(access_token, id_user, old_password, new_password):
    url = URL_SERVICES + "/user/update/password"
    data = {}
    data['access_token'] = access_token
    data['id_user'] = id_user
    data['old_password'] = old_password
    data['new_password'] = new_password
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return {"error": e}
    
def service_user_update(access_token, data):
    url = URL_SERVICES + "/user/update"
    data['access_token'] = access_token
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return {"error": e}

'''
@summary: result method that makes a request to validate user credentials
@param login: this username
@param password: 
'''
def service_user_validate(login, password):
    url = URL_SERVICES + "/user/validate"
    params = {'login': login, 'password': password, 'app': APP_TYPE}

    try:
        r = requests.post(url, data=json.dumps(params))
        if r.status_code == 200:
            result = r.json()
            if 'access_token' in result:
                response = service_get_user_by_token(result['access_token']) 
                response['access_token'] = result['access_token']
                return response          
            elif 'error' in result:
                return result
            else:
                raise Exception("Hubo un error desconocido")
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return {"error": e}

'''
@summary: result method that makes a request for the user access_token
@param access_token: 
'''   
def service_get_user_by_token(access_token):
    url = URL_SERVICES + "/user/view"
    params = {'access_token': access_token, 'app': APP_TYPE}
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
        else:
            return error_handler(result.status_code)
    except Exception as e:
        return {"error": e}

def service_user_find_all(access_token, status, name_filter, page_number, page_size):
    url = URL_SERVICES + "/user/find/all"
    params = {'access_token': access_token, 'status': status, 'type': "BACKEND",
              'page_number': page_number, 'page_size': page_size, 'name_filter': name_filter}
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
        else:
            return error_handler(result.status_code)
    except Exception as e:
        return e

def service_user_find_by_id(access_token, id_user):
    url = URL_SERVICES + "/user/find/by/id"
    params = {'access_token': access_token, 'id_user': id_user}
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
@param id_user
@param status: 
'''
def service_user_update_status(access_token, id_user, status):
    url = URL_SERVICES + "/user/update/status"
    data = {}
    data['access_token'] = access_token
    data['id_user'] = id_user
    data['status'] = status
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return e

'''
@summary: result method that makes a request for the user access_token
@param access_token: 
'''   
def service_recover_password_send_email(login):
    url = URL_SERVICES + "/user/recover/password"
    data = {}
    data['login'] = login
    data['app'] = APP_TYPE
    try:
        result = requests.post(url, data=json.dumps(data))
        if result.status_code == 200:
            return result.json()
        else:
            return error_handler(result.status_code)
    except Exception as e:
        return {"error": e}
    
'''
@summary: result method that makes a request for the user access_token
@param access_token: 
'''   
def service_recover_password_validate_token(access_token):
    url = URL_SERVICES + "/user/recover/password/validate"
    params = {'access_token': access_token}
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
        else:
            return error_handler(result.status_code)
    except Exception as e:
        return {"error": e}

'''
@summary: 
@param
@param status: 
'''
def service_recover_password_update_data(access_token, password):
    url = URL_SERVICES + "/user/recover/password/update"
    data = {}
    data['access_token'] = access_token
    data['password'] = password             
    try:
        r = requests.post(url, data=json.dumps(data))
        if r.status_code == 200:
            return r.json()
        else:
            return error_handler(r.status_code)
    except Exception as e:
        return e 


def error_handler(status_error):
    if status_error == 400:
        return {"error": "Error en datos enviados"}
    elif status_error == 500:
        return {"error": "Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error": "Ocurrio un error ({0})".format(status_error)}