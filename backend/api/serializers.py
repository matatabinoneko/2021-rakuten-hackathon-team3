from django.db.models import fields
from rest_framework import serializers 
from api.models import User, Wishlist
from api.models import PreferenceTag
from api.models import Product
from django.contrib.auth import get_user_model

class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("loginid", "username", "birthday")

class PreferenceTagSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="get_name_display", read_only=True)
    class Meta:
        model = PreferenceTag
        fields = (
            'id',
            'name'
        )
class UserSerializer(serializers.ModelSerializer):

    friends = FriendSerializer(many=True)
    tags = PreferenceTagSerializer(many=True)
    class Meta:
        model = get_user_model()
        fields = ("loginid","password", "username", "firstname", "lastname", "iconimage", "birthday",
                "zipcode", "address", "is_recommend", "friends", "tags")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        friends = validated_data.pop("friends")
        tags = validated_data.pop("tags")
        user = get_user_model().objects.create_user(**validated_data)
        for f in friends:
            user.friends.add(f)
        for t in tags:
            user.tags.add(t)



class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = (
            'id',
            'name',
            'user_id'
        )
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


class ProductSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Product
        fields = (
            'name',
            'url'
        )
