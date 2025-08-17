from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RecipeViewSet, CuisineViewSet

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'cuisines', CuisineViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
