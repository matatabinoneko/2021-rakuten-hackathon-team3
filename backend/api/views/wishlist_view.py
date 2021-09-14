from rest_framework import generics
from ..models import Wishlist
from ..serializers import WishlistSerializer
from rest_framework.permissions import AllowAny


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