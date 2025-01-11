from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from .models import Product, UserInfo

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

@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    print(username)
    print(password)
    UserInfo = custom_authenticate( username=username, password=password)
    if UserInfo is not None:
        return Response({'message': 'Login successful', 'user': username}, status=200)
    else:
        return Response({'error': 'Invalid credentials'}, status=400)
    

def custom_authenticate(username, password):
        try:
            user = UserInfo.objects.get(username=username)
            if check_password(password, user.password):
                return user
            else:
                raise Exception("Invalid password")
        except UserInfo.DoesNotExist:
            raise Exception("User does not exist")