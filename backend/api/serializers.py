from rest_framework import serializers 
from api.models import User
from api.models import PreferenceTag
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("loginid","password", "username", "firstname", "lastname", "iconimage", "birthday",
                "zipcode", "address", "is_recommend")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)

        return user

class PreferenceTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = PreferenceTag
        fields = (
            'id',
            'name'
        )