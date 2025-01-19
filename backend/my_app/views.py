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
    print("login_user API")
    username = request.data.get('username')
    password = request.data.get('password')
    print(username)
    print(password)
    UserInfo = custom_authenticate( username=username, password=password)
    print(UserInfo)
    if UserInfo.get('status') == 'success' :
        return Response({'message': UserInfo.get('message'), 'user': UserInfo.get('user'), 'status': True}, status=200)
    else:
        return Response({'message': UserInfo.get('message'), 'statutype': False}, status=400)
    

def custom_authenticate(username, password):
        try:
            user = UserInfo.objects.get(UserName=username)
            if check_password(password, user.Password):
                return {
                    "status": "success",
                    "message": "Login successful",
                    "user": {
                        "id": user.UserID,
                        "username": user.UserName,
                            }
                }
            else:
                return {
                    "status": "error",
                    "message": "Invalid username or password"
            }
        except UserInfo.DoesNotExist:
            return {
                "status": "error",
                "message": "User does not exist"
        }