from django.urls import path
from .views import (
    UserCreationAPIView
)


urlpatterns = [
    path("", UserCreationAPIView.as_view(), name="user-create"),
]