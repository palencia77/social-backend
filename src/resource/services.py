import json
import requests
from backend.settings import URL_SERVICES

'''
@summary: Service that get resource by id
@param access_token, id_resource
'''
def service_resource_get_by_id(access_token, id_resource):
    url = URL_SERVICES + "/resource/find/by/id"
    params = {'access_token' : access_token,
              'id_resource' : id_resource,
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        print e
    return Error_Handler(result.status_code)

'''
@summary: Service that get resource by post
@param access_token, id_post
'''
def service_resource_get_by_post(access_token, id_post, page_number=1,page_size=10):
    url = URL_SERVICES + "/resource/find/by/post"
    params = {'access_token' : access_token,
              'id_post' : id_post,
              'page_number' : page_number,
              'page_size' : page_size
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        print e
    return Error_Handler(result.status_code)


'''
@summary: Service that get resource by post
@param access_token, id_post
'''
def service_resource_get_by_award(access_token, id_award, page_number=1,page_size=10):
    url = URL_SERVICES + "/resource/find/by/award"
    params = {'access_token' : access_token,
              'id_award' : id_award,
              'page_number' : page_number,
              'page_size' : page_size
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        print e
    return Error_Handler(result.status_code)

'''
@summary: 
@param status_error:
'''
def Error_Handler(status_error):
    if status_error == 400:
        return {"error":"Error en datos enviados"}
    elif status_error == 500:
        return {"error":"Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error":("Ocurrio un error ({0})".format(status_error))} 