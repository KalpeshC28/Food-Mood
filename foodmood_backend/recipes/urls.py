from django.urls import path
from .views import FusionRecipeView

urlpatterns = [
    path('fusion/', FusionRecipeView.as_view()),
]