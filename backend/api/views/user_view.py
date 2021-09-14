from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from ..serializers import UserSerializer
from rest_framework.permissions import AllowAny
from ..models import User

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class ListUserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # TODO: authentification
    permission_classes = (AllowAny,)

class RetrieveUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    # TODO: authentification
    permission_classes = (AllowAny,)
    lookup_field = "loginid"




