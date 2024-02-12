from django.urls import path, include
from rest_framework import routers
from apps.clima import views


router = routers.DefaultRouter()
router.register(r'clima', views.ClimaViewSet)

urlpatterns = [
    path('', include(router.urls))
]
