from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.views import APIView
from ..serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status as http_status
from rest_framework.generics import get_object_or_404 # new
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

class FriendAPI(APIView):
    permission_classes = (AllowAny,)
    # body-param example) {"friendid" : ["satou", "watanabe1"]}
    def post(self, request, loginid):
        user = get_object_or_404(User, loginid=loginid)
        friend = request.data["friendid"]
        if len(friend) > 0:
            for f in friend:
                try:
                    friendinfo = get_object_or_404(User, loginid=f)
                    friendid = friendinfo.id
                    user.friends.add(friendid)
                except:
                    pass
            return Response(status=http_status.HTTP_201_CREATED)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_204_NO_CONTENT)


    def delete(self, request, loginid, *args, **kwargs):
        user = get_object_or_404(User, loginid=loginid)
        friend = request.data["friendid"]
        
        if len(friend) > 0:
            for f in friend:
                try:
                    friendinfo = get_object_or_404(User, loginid=f)
                    friendid = friendinfo.id
                    user.friends.remove(friendid)
                except:
                    pass

            return Response(status=http_status.HTTP_204_NO_CONTENT)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_200_OK)




class TagAPI(APIView):
    # TODO: authentification
    permission_classes = (AllowAny,)

    def post(self, request, loginid):
        user = get_object_or_404(User, loginid=loginid)
        friend = request.data["friendid"]
        if len(friend) > 0:
            friendinfo = get_object_or_404(User, loginid=friend)
            friendid = friendinfo.id
            user.friends.add(friendid)
            return Response(status=http_status.HTTP_201_CREATED)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_204_NO_CONTENT)


    def delete(self, request, loginid, *args, **kwargs):
        user = get_object_or_404(User, loginid=loginid)
        friend = request.data["friendid"]
        if len(friend) > 0:
            friendinfo = get_object_or_404(User, loginid=friend)
            friendid = friendinfo.id
            user.friends.remove(friendid)

            return Response(status=http_status.HTTP_204_NO_CONTENT)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_200_OK)


