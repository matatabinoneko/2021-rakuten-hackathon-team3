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
    
    serializer_class = UserSerializer
    # TODO: authentification
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    def get_queryset(self):
        queryset = User.objects.all()
        userid = self.request.query_params.get("userid", None)
        if userid is not None:
            return queryset.filter(loginid__icontains=userid)
        return queryset


class RetrieveUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    # TODO: authentification
    # permission_classes = (AllowAny,)
    lookup_field = "loginid"

class FriendAPI(APIView):
    # permission_classes = (AllowAny,)
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
    # permission_classes = (AllowAny,)
    # body-param example) {"tagid" : [1, 2]}
    def post(self, request, loginid):
        user = get_object_or_404(User, loginid=loginid)
        tags = request.data["tagid"]
        if len(tags) > 0:
            for t in tags:
                try:
                    user.tags.add(t)
                except:
                    pass
            return Response(status=http_status.HTTP_201_CREATED)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_204_NO_CONTENT)


    def delete(self, request, loginid, *args, **kwargs):
        user = get_object_or_404(User, loginid=loginid)
        tags = request.data["tagid"]
        if len(tags) > 0:
            for t in tags:
                try:
                    user.tags.remove(t)
                except:
                    pass

            return Response(status=http_status.HTTP_204_NO_CONTENT)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_200_OK)

class WishlistAPI(APIView):
    # body-param example {"wishlistid" : [1, 2]}
    def delete(self, request, loginid, *args, **kwargs):
        user = get_object_or_404(User, loginid=loginid)
        wishlistid = request.data["wishlistid"]
        if len(wishlistid) > 0:
            for w in wishlistid:
                try:
                    user.haswishlist.all().filter(id=w).delete()

                except:
                    pass

            return Response(status=http_status.HTTP_204_NO_CONTENT)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_200_OK)

class LoginuserAPI(APIView):
    def get(self, request):
        return Response(self.request.user.loginid)