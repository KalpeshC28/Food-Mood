from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class FusionRecipeView(APIView):
    def post(self, request):
        # Extract data from request
        cuisine1 = request.data.get('cuisine1')
        cuisine2 = request.data.get('cuisine2')
        servings = request.data.get('servings')
        mealType = request.data.get('mealType')



    query = f"{cuisine_1} {cuisine_2} {meal_type} fusion"
    url = f"https://api.spoonacular.com/recipes/complexSearch"
    params = {
        "query": query,
        "number": 5,
        "apiKey": config("SPOONACULAR_API_KEY")
    }

    response = requests.get(url, params=params)
   return Response({
            "message": f"Fusion of {cuisine1} and {cuisine2} for {servings} servings of {mealType} coming right up!"
        }, status=status.HTTP_200_OK)
