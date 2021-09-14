from rest_framework import serializers 
from api.models import User
from api.models import PreferenceTag
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
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

class PreferenceTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = PreferenceTag
        fields = (
            'id',
            'name'
        )
