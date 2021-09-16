from rest_framework import routers
from django.urls import path
from django.conf.urls import include

from .views.user_view import CreateUserView, ListUserView, RetrieveUserView, FriendAPI, TagAPI, WishlistAPI, LoginuserAPI, LogoutAPi
from .views.preferencetag_view import PreferenceTagList
from .views.product_view import CreateProductView, ProductDetails, ProductList
from .views.wishlist_view import WishlistList, WishlistDetail, CreateWishlist, ProductAPI
from .views.navi_view import NaviAPI
router = routers.DefaultRouter()

urlpatterns = [
     path('', include(router.urls)),
     path('users/create/', CreateUserView.as_view(), name='create'),
     path('users/<str:loginid>/', RetrieveUserView.as_view(), name='retrieve'),
     path('users/<str:loginid>/friend/', FriendAPI.as_view()),
     path('users/<str:loginid>/tag/', TagAPI.as_view()),
     path('users/<str:loginid>/wishlist/', WishlistAPI.as_view()),
     path('users/', ListUserView.as_view(), name="list"),
     path('preferencetags/', PreferenceTagList.as_view(),),
     path('wishlists/', WishlistList.as_view(),),
     path('wishlists/<int:pk>/', WishlistDetail.as_view(),),
     path('wishlists/<int:pk>/product/', ProductAPI.as_view(),),
     path('wishlists/create/', CreateWishlist.as_view(),),
     path('products/', ProductList.as_view(),),
     path('products/<int:pk>/', ProductDetails.as_view(),),
     path('products/create/', CreateProductView.as_view(),),
     path('navi/', NaviAPI.as_view(),),
     path('loginuser/', LoginuserAPI.as_view(),),
     path('logout/', LogoutAPi.as_view())
]
