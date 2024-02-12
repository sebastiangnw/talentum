"""
URL configuration for settings project.

"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    # Clima
    path('api/v1/', include('apps.clima.urls')),
    # Documentacion
    path('docs/', include_docs_urls(title='API Documentation'))
]
