import json
import requests
from heybeesbackend.settings import URL_SERVICES

'''
@summary: Service that counts the number of operations in the cause and its posts for every point in a
         time interval for operation type
@param access_token,owner, operation_type_one, operation_type_two,time_unit
'''
def service_cause_count_operations_by_two_types(access_token, id_cause, operation_type_one, operation_type_two, time_unit):
    url = URL_SERVICES + "/operation/count/two_operations/by/cause"
    params = {'access_token' : access_token,
              'id_cause' : id_cause,
              'operation_type_one' : operation_type_one,
              'operation_type_two' : operation_type_two,
              'time_unit' : time_unit
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        print e
    return Error_Handler(result.status_code)

'''
@summary: service that counts the number of operations(two) performed by each 
        point at a time interval by type of operation and by post_destination
@param access_token:
@param post_destination:
@param operation_type_one:
@param operation_type_two:
@param time_unit:
@return: response
@status: tested 15/09/2014
'''
def service_post_count_operations_by_two_types(access_token, post_destination, operation_type_one, operation_type_two, time_unit):
    url = URL_SERVICES + "/operation/count/by/cause_or_post"
    params = {'access_token' : access_token,
              'post_destination' : post_destination,
              'operation_type_one' : operation_type_one,
              'operation_type_two' : operation_type_two,
              'time_unit' : time_unit
              }
    try:
        result = requests.get(url, params=params)
        if result.status_code == 200:
            return result.json()
    except Exception as e:
        print e
    return Error_Handler(result.status_code)

def Error_Handler(status_error):
    if status_error == 400:
        return {"error":"Error en datos enviados"}
    elif status_error == 500:
        return {"error":"Ocurrio un error en el servidor por favor intente mas tarde"}
    else:
        return {"error":("Ocurrio un error ({0})".format(status_error))} 