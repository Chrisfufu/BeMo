from django.conf.urls import url
from django.contrib import admin

from .views import *

urlpatterns = [
    url(r'^contact/$', ContactCreateAPIView.as_view(), name='contact-us'),
]
