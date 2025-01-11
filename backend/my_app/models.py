from django.db import models
import uuid  # 用於 uniqueidentifi

class Product(models.Model):
    name = models.CharField(max_length=255)  # 產品名稱
    price = models.DecimalField(max_digits=10, decimal_places=2)  # 價格
    stock = models.IntegerField()  # 庫存數量
    created_at = models.DateTimeField(auto_now_add=True)  # 創建時間
    updated_at = models.DateTimeField(auto_now=True)  # 更新時間

    def __str__(self):
        return self.name
    

class UserInfo(models.Model):  # 請將 "YourTableName" 替換為你的表名稱
    DataID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)  # 對應 uniqueidentifier
    CreateID = models.CharField(max_length=30)  # 對應 nvarchar(30)
    CreateDate = models.DateTimeField()  # 對應 datetime
    UpdateID = models.CharField(max_length=30)  # 對應 nvarchar(30)
    UpdateDate = models.DateTimeField()  # 對應 datetime
    DataFlag = models.BinaryField()  # 對應 timestamp (Django 不直接支持 timestamp，建議用 BinaryField)
    UserID = models.CharField(max_length=20)  # 對應 nvarchar(20)
    UserName = models.CharField(max_length=100)  # 對應 nvarchar(100)
    Password = models.TextField()  # 對應 nvarchar(MAX)
    def __str__(self):
        return self.UserName