import json
import requests
from heybeesbackend.settings import URL_SERVICES, APP_TYPE

'''
@summary: Service to get all posts of a cause
@param access_token,page_number, page_size, id_cause
@param id_cause
'''
def service_post_find_by_bee(access_token, id_bee, page_number=1,page_size=10):
    url = URL_SERVICES + "/find/posts/by/bee"
    params = {'access_token': access_token,
              'page_number': page_number,
              'page_size': page_size,
              'id_bee': id_bee,
              'app': APP_TYPE}
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        return error_handler(result.status_code)

'''
@summary: Service to save a post of bee
@param access_token
@param id_bee
@param data:
@param with_resource:
@param resource:
'''
def service_post_save(access_token, data, id_bee, with_resource, resources):
    url = URL_SERVICES + "/post/create"
    json_data = { 'access_token': access_token,
                  'id_bee': id_bee,
                  'title': data['title'],
                  'text': data['text'],
                  'with_resource': with_resource,
                  'resources': resources,
                  'app':APP_TYPE
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
@summary: Service to remove a post of bee
@param access_token
@param id_bee
@param id_post:
'''    
def service_post_remove(access_token, id_post, id_bee):
    url = URL_SERVICES + "/post/remove"
    json_data = { 'access_token': access_token,
                  'id_post': id_post,
                  'id_bee': id_bee,
                  'app':APP_TYPE
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
@summary: Service to update a post of bee
@param access_token
@param id_bee
@param data:
@param resources_to_remove: 
@param resources_to_add: 
@param with_resource:
'''
def service_post_update(access_token, data, id_bee, resources_to_remove, resources_to_add, with_resource):
    url = URL_SERVICES + "/post/update"
    json_data = { 'access_token': access_token,
                  'id_post': data['id_post'],
                  'title': data['title'],
                  'text': data['text'],
                  'id_bee': id_bee,
                  'resources_to_remove': resources_to_remove,
                  'resources_to_add': resources_to_add,
                  'with_resource': with_resource,
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
@summary: Service to find post by id
@param access_token
@param id_post
'''   
def service_post_find_by_id(access_token, id_post):
    url = URL_SERVICES + "/post/find/by_id"
    params = {'access_token':access_token, 'id_post': id_post}
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