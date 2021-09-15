from rest_framework import generics
from rest_framework.serializers import Serializer
from ..models import Wishlist
from ..serializers import WishlistSerializer

from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status as http_status
from rest_framework.generics import get_object_or_404 # new

class WishlistList(generics.ListAPIView):
    serializer_class = WishlistSerializer
    
    def get_queryset(self):
        user = self.request.user
        return Wishlist.objects.filter(user=user)

class WishlistDetail(generics.RetrieveAPIView):
    serializer_class = WishlistSerializer

    def get_queryset(self):
        user = self.request.user
        return Wishlist.objects.filter(user=user)

class WishlistDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = WishlistSerializer

    def get_queryset(self):
        user = self.request.user
        return Wishlist.objects.filter(user=user)

class CreateWishlist(generics.CreateAPIView):
    model = Wishlist
    serializer_class = WishlistSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        user = self.request.user
        wishlist = Wishlist.objects.create(
            name=data['name'],
            user=user
        )
        serializer = WishlistSerializer(wishlist)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=http_status.HTTP_201_CREATED,
                        headers=headers)
