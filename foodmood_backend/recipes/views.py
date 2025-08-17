from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class FusionRecipeView(APIView):
    def post(self, request):
        cuisine1 = request.data.get('cuisine1')
        cuisine2 = request.data.get('cuisine2')
        servings = request.data.get('servings')
        mealType = request.data.get('mealType')

        return Response({
            "message": f"Fusion of {cuisine1} and {cuisine2} for {servings} servings of {mealType} coming right up!"
        }, status=status.HTTP_200_OK)