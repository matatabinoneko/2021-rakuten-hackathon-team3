from rest_framework import generics
from rest_framework.serializers import Serializer
from ..models import Wishlist, Product, User
from ..serializers import WishlistSerializer
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status as http_status
from rest_framework.generics import get_object_or_404
class WishlistList(generics.ListAPIView):
    serializer_class = WishlistSerializer

    def get_queryset(self):
        queryset = Wishlist.objects.all()
        userid =  self.request.query_params.get("userid", None)
        alluser = User.objects.all()
        if userid is not None:
            try:
                u = alluser.filter(loginid=userid)[0]
                return queryset.filter(user=u)
            except:
                pass

        return queryset

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

class CreateWishlist(generics.CreateAPIView):
    model = Wishlist
    serializer_class = WishlistSerializer

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


class ProductAPI(APIView):
    # body-param example) {"friendid" : ["satou", "watanabe1"]}
    def post(self, request, pk):
        wishlist = get_object_or_404(Wishlist, pk=pk)
        product = request.data["productid"]
        if len(product) > 0:
            for p in product:
                try:
                    productid = get_object_or_404(Product, pk=p).id
                    wishlist.products.add(productid)
                except:
                    pass
            return Response(status=http_status.HTTP_201_CREATED)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_204_NO_CONTENT)


    def delete(self, request, pk, *args, **kwargs):
        wishlist = get_object_or_404(Wishlist, pk=pk)
        product = request.data["productid"]
        if len(product) > 0:
            for p in product:
                try:
                    productid = get_object_or_404(Product, pk=p).id
                    wishlist.products.remove(productid)
                except:
                    pass
            return Response(status=http_status.HTTP_204_NO_CONTENT)
        else:
            # I don't know appropriate http status code
            return Response(status=http_status.HTTP_201_CREATED)
