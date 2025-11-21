from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet, BlogViewSet, NewsViewSet, PartnerViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'news', NewsViewSet)
router.register(r'partners', PartnerViewSet)

urlpatterns = [
    path('api/', include(router.urls)),   # e.g. /api/products/, /api/blogs/, etc.
]
