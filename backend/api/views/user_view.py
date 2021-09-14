from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from ..serializers import UserSerializer
from rest_framework.permissions import AllowAny
from ..models import User

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)