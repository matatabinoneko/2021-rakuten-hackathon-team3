from rest_framework import generics
from ..models import PreferenceTag
from ..serializers import PreferenceTagSerializer
# from rest_framework.permissions import AllowAny

class PreferenceTagList(generics.ListAPIView):
    queryset = PreferenceTag.objects.all()
    serializer_class = PreferenceTagSerializer
