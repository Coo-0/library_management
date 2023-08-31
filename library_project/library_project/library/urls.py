# library/urls.py
from django.urls import path, include
from .views import BookList, ComedyBooksAPIView, FictionBooksAPIView, SciFiBooksAPIView, CategoryListAPIView, UserDetailAPIView
from django.contrib import admin
from . import views
from .views import UserRegistrationAPIView, UserLoginAPIView, UserLogoutAPIView

urlpatterns = [
    path('api/books/', BookList.as_view(), name='book-list'),
    path('library/', include('library_project.library.urls')),
    path('', include('library.urls')),
    path('admin/', admin.site.urls),
    path('api/sci-fi-books/', SciFiBooksAPIView.as_view(), name='sci-fi-books'),
    path('api/fiction-books/', FictionBooksAPIView.as_view(), name='fiction-books'),
    path('api/comedy-books/', ComedyBooksAPIView.as_view(), name='comedy-books'),
    path('api/categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('api/users/<int:user_id>/', UserDetailAPIView.as_view(), name='user-detail'),
    path('api/sci-fi-books/', views.SciFiBooksAPIView.as_view(), name='sci-fi-books'),
    path('api/fiction-books/', views.FictionBooksAPIView.as_view(), name='fiction-books'),
    path('api/comedy-books/', views.ComedyBooksAPIView.as_view(), name='comedy-books'),
     path('api/register/', UserRegistrationAPIView.as_view(), name='user-register'),
    path('api/login/', UserLoginAPIView.as_view(), name='user-login'),
    path('api/logout/', UserLogoutAPIView.as_view(), name='user-logout'),
]
    # Add other URL patterns as needed
