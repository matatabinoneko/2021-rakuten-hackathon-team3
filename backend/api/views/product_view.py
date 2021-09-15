from rest_framework import generics
from rest_framework.serializers import Serializer
from ..models import Product
from ..serializers import ProductSerializer

from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status as http_status

class CreateProductView(generics.CreateAPIView):
    serializer_class = ProductSerializer

class ProductList(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductDetails(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
