from django.contrib import admin

# Register your models here.
from .models import Product, UserInfo


admin.site.register(Product)
admin.site.register(UserInfo)