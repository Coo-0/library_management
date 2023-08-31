# library/views.py
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category, User
from .serializers import CategorySerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, login, logout
from .serializers import UserRegistrationSerializer, UserLoginSerializer

# class BookList(generics.ListCreateAPIView):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer

class SciFiBooksAPIView(generics.ListAPIView):
    queryset = Book.objects.filter(category='Sci-Fi')
    serializer_class = BookSerializer

class FictionBooksAPIView(generics.ListAPIView):
    queryset = Book.objects.filter(category='Fiction')
    serializer_class = BookSerializer

class ComedyBooksAPIView(generics.ListAPIView):
    queryset = Book.objects.filter(category='Comedy')
    serializer_class = BookSerializer


class CategoryListAPIView(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class UserDetailAPIView(APIView):
    def get(self, request, user_id, format=None):
        user = User.objects.get(pk=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

class UserLoginAPIView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                refresh = RefreshToken.for_user(user)
                return Response({'refresh': str(refresh), 'access': str(refresh.access_token)}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogoutAPIView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': 'User logged out successfully'}, status=status.HTTP_200_OK)