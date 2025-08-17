import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from decouple import config

class FusionRecipeView(APIView):
    def post(self, request):
        cuisine1 = request.data.get('cuisine1')
        cuisine2 = request.data.get('cuisine2')
        servings = request.data.get('servings')
        mealType = request.data.get('mealType')

        query = f"{cuisine1} {cuisine2} {mealType} fusion"
        url = "https://api.spoonacular.com/recipes/complexSearch"
        params = {
            "query": query,
            "number": 5,
            "apiKey": config("SPOONACULAR_API_KEY")
        }

        try:
            response = requests.get(url, params=params)
            data = response.json()
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)