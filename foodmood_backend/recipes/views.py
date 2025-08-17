# recipes/views.py
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from decouple import config

@api_view(['POST'])
def get_fusion_recipes(request):
    data = request.data
    cuisine_1 = data['cuisine1']
    cuisine_2 = data['cuisine2']
    servings = data['servings']
    meal_type = data['mealType']

    query = f"{cuisine_1} {cuisine_2} {meal_type} fusion"
    url = f"https://api.spoonacular.com/recipes/complexSearch"
    params = {
        "query": query,
        "number": 5,
        "apiKey": config("SPOONACULAR_API_KEY")
    }

    response = requests.get(url, params=params)
    return Response(response.json())