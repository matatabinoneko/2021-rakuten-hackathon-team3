from rest_framework import generics
from .. import models
from .. import serializers
from rest_framework.permissions import AllowAny

class PreferenceTagList(generics.ListAPIView):
    queryset = models.PreferenceTag.objects.all()
    serializer_class = serializers.PreferenceTagSerializer