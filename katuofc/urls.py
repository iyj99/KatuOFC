"""URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from katuofc.katuofcapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('facilitamei', views.facilitamei_index, name='facilitamei_index'),
    path('facilitamei/dashboard', views.facilitamei_dashboard, name='facilitamei_dashboard'),
    path('facilitamei/sobre', views.facilitamei_sobre, name='facilitamei_sobre'),
    path('pp', views.pp, name='pp'),
    path('', include('pwa.urls')),
]
