from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)  # 產品名稱
    price = models.DecimalField(max_digits=10, decimal_places=2)  # 價格
    stock = models.IntegerField()  # 庫存數量
    created_at = models.DateTimeField(auto_now_add=True)  # 創建時間
    updated_at = models.DateTimeField(auto_now=True)  # 更新時間

    def __str__(self):
        return self.name