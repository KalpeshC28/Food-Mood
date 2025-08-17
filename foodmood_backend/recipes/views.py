from django.shortcuts import render

# Create your views here.
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings

class FusionRecipeView(APIView):
    def post(self, request):
        cuisines = request.data.get('cuisines', [])
        servings = request.data.get('servings', 2)
        meal_type = request.data.get('meal_type', 'main course')
        api_key = 'config("SPOONACULAR_API_KEY")'
        url = f'https://api.spoonacular.com/recipes/complexSearch'
        params = {
            'cuisine': ','.join(cuisines),
            'number': 5,
            'type': meal_type,
            api_key = settings.SPOONACULAR_API_KEY
        }
        r = requests.get(url, params=params)
        return Response(r.json())
