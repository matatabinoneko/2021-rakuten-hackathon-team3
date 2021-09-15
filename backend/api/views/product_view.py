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
    # queryset = Product.objects.all()
    def get_queryset(self):
        queryset = Product.objects.all()
        tag =  self.request.query_params.get("tag", None)
        if tag is not None:
            return queryset.filter(tags=tag)
        return queryset


class ProductDetails(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

