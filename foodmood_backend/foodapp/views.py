from rest_framework import viewsets
from .models import Recipe, Cuisine
from .serializers import RecipeSerializer, CuisineSerializer


class CuisineViewSet(viewsets.ModelViewSet):
    queryset = Cuisine.objects.all()
    serializer_class = CuisineSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
