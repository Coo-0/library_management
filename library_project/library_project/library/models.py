# library/models.py
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)
    
class Book(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    # Add other fields as needed (e.g., author, publication_year)

class CustomerUser(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    address = models.TextField()
    college = models.CharField(max_length=100)

    def __str__(self):
        return self.name