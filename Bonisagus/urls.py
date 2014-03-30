from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'Bonisagus.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'Core.views.base'),
    url(r'^characters/?$', 'Core.views.characters'),
    url(r'^characters/(?P<guid>.+)?$', 'Core.views.character'),
    url(r'^abilities/?$', 'Core.views.abilities'),
    url(r'^virtues/(?P<page_num>\d+)$', 'Core.views.virtues'),
    url(r'^flaws/(?P<page_num>\d+)$', 'Core.views.flaws'),
)
