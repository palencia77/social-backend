from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import *


urlpatterns = patterns('',
                       
    url(r'^$', base),    
    url(r'^login/', login),
    url(r'^logout/', logout),
    url(r'^admin/', user_list_init),
    url(r'^recover/password', recover_password),
    url(r'^recover/update/password', recover_password_update)
)