from django.urls import path
from .views import (
    UserCreationAPIView, UserRetrieveAPIView
)


urlpatterns = [
    path("", UserCreationAPIView.as_view(), name="user-create"),
    path("retrieve/<int:pk>/", UserRetrieveAPIView.as_view(), name="user-retrieve"),
]