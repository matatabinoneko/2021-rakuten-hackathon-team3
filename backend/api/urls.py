from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .views.user_view import CreateUserView
router = routers.DefaultRouter()

urlpatterns = [
     path('', include(router.urls)),
     path('create/', CreateUserView.as_view(), name='create'),
]