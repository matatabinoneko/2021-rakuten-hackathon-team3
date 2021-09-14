from django.db.models import fields
from rest_framework import serializers 
from api.models import User, Wishlist
from api.models import PreferenceTag
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