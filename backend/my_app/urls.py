from django.urls import path
from .views import get_products
from .views import login_user

urlpatterns = [
    path('api/products/', get_products, name='get_products'),
    path('api/login/', login_user, name='login_user'),
]
