from django.db.models import fields
from rest_framework import serializers 

from api.models import User, Wishlist, PreferenceTag, Product

from django.contrib.auth import get_user_model
from rest_framework.serializers import SerializerMethodField
class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "loginid", "username", "birthday", "friends")

class PreferenceTagSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="get_name_display", read_only=True)
    class Meta:
        model = PreferenceTag
        fields = (
            'id',
            'name'
        )


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = (
            'id',
            'name',
            'user_id'
        )
class UserSerializer(serializers.ModelSerializer):

    friends = FriendSerializer(many=True)
    tags = PreferenceTagSerializer(many=True)
    wishlists = SerializerMethodField()

    class Meta:
        model = get_user_model()

        fields = ("loginid","password", "username", "firstname", "lastname", "iconimage", "birthday",
                "zipcode", "address", "is_recommend", "friends", "tags", "wishlists")
        extra_kwargs = {"password": {"write_only": True}}

    def get_wishlists(self, obj):
        wishlist_abstruct_contents = WishlistSerializer(Wishlist.objects.all().filter(user_id= obj.id), many=True).data
        return wishlist_abstruct_contents

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

class ProductSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Product
        fields = (
            'name',
            'url'
        )