from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import *


urlpatterns = [
   
    url(r'^', interaction_list_init)
      
]
