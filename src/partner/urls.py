from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import *


urlpatterns = [
   
    url(r'^', partner_list_init)
      
]