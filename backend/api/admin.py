# backend/api/admin.py
from django.contrib import admin
from .models import Product, Blog, News, Partner

admin.site.register(Product)
admin.site.register(Blog)
admin.site.register(News)
admin.site.register(Partner)
