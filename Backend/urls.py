"""
URL configuration for Backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Backend import views

urlpatterns = [
    # Customer APIs
    path('customers/add/', views.add_customer),
    path('customers/', views.get_customers),
    path('customers/update/<int:id>/', views.update_customer),
    path('customers/delete/<int:id>/', views.delete_customer),

    # Restaurant APIs
    path('restaurants/add/', views.add_restaurant),
    path('restaurants/', views.get_restaurants),
    path('restaurants/update/<int:id>/', views.update_restaurant),
    path('restaurants/delete/<int:id>/', views.delete_restaurant),

    # Food APIs
    path('foods/add/', views.add_food),
    path('foods/', views.get_foods),
    path('foods/update/<int:id>/', views.update_food),
    path('foods/delete/<int:id>/', views.delete_food),

    # Cart APIs
    path('cart/add/', views.add_cart_item),
    path('cart/', views.get_cart),
    path('cart/update/<int:id>/', views.update_cart),
    path('cart/delete/<int:id>/', views.delete_cart),

    # Order APIs
    path('orders/add/', views.add_order),
    path('orders/', views.get_orders),
    path('orders/update/<int:id>/', views.update_order),
    path('orders/delete/<int:id>/', views.delete_order),

    # Admin Auth API
    path('admin/login/', views.admin_login),
]
