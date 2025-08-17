from django.db import models

class RecipeQuery(models.Model):
    cuisine_1 = models.CharField(max_length=50)
    cuisine_2 = models.CharField(max_length=50)
    servings = models.IntegerField()
    meal_type = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)