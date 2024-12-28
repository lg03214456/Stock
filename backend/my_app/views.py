from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product

@api_view(['GET'])
def get_products(request):
    """
    撈取 Product 資料表中的所有資料，並返回 JSON。
    """
    products = Product.objects.all()  # 查詢所有資料
    data = [
        {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "stock": product.stock,
            "created_at": product.created_at,
            "updated_at": product.updated_at
        }
        for product in products
    ]
    return Response(data)  # 返回 JSON 格式資料
