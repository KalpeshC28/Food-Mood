from rest_framework import serializers
from .models import Recipe, Cuisine


class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = "__all__"


class RecipeSerializer(serializers.ModelSerializer):
    cuisine = CuisineSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = "__all__"
