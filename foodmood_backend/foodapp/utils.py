import requests
from django.conf import settings
from .models import Recipe, Cuisine

def fetch_recipes_from_spoonacular():
    url = "https://api.spoonacular.com/recipes/random"
    params = {
        "apiKey": settings.SPOONACULAR_API_KEY,
        "number": 5  # number of recipes you want
    }
    response = requests.get(url, params=params)
    data = response.json()

    for item in data.get("recipes", []):
        # Handle cuisines properly
        cuisines = item.get("cuisines", [])
        cuisine_name = cuisines[0] if cuisines else "Unknown"

        # Get or create Cuisine
        cuisine, created = Cuisine.objects.get_or_create(name=cuisine_name)

        # Save Recipe
        Recipe.objects.create(
            name=item["title"],
            description=item.get("summary", ""),
            cuisine=cuisine
        )
