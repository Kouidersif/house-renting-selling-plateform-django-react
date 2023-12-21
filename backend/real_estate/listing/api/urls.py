from django.urls import path
from .views import (
    ListingAPIView, ListingRetreiverAPIView, CreateListingAPIView
)

urlpatterns = [
    path("create/", CreateListingAPIView.as_view(), name="create-listing" ),
    path("", ListingAPIView.as_view(), name="list-objects" ),
    path("retrieve/<int:pk>/", ListingRetreiverAPIView.as_view(), name="retrieve-update-listing" ),
]
