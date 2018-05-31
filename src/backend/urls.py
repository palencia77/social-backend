from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from dajaxice.core import dajaxice_autodiscover, dajaxice_config
admin.autodiscover()

urlpatterns = [
    # Examples:
    #url(r'^$', 'backend.views.home', name='home'),
    url(r'^$', include('security.urls')),
    url(r'^user/', include('security.urls')),
    url(r'^cause/', include('cause.urls')),
    url(r'^scope/', include('scope.urls')),
    url(r'^partner/', include('partner.urls')),
    url(r'^ambassador/', include('celebrity.urls')),
    url(r'^interaction', include('interactionType.urls')),
    url(dajaxice_config.dajaxice_url, include('dajaxice.urls')),
]
urlpatterns += staticfiles_urlpatterns()
