from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .views.user_view import CreateUserView, ListUserView, RetrieveUserView
router = routers.DefaultRouter()

urlpatterns = [
     path('', include(router.urls)),
     path('users/create/', CreateUserView.as_view(), name='create'),
     path('users/<str:loginid>/', RetrieveUserView.as_view(), name='retrieve'),
     path('users/', ListUserView.as_view(), name="list")
]