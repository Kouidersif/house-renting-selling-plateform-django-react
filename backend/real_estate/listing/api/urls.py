from django.urls import path
from .views import (
    ListingAPIView, ListingRetreiverAPIView, CreateListingAPIView,
    VisitPropertyRequestAPiView
)

urlpatterns = [
    path("create/", CreateListingAPIView.as_view(), name="create-listing" ),
    path("", ListingAPIView.as_view(), name="list-objects" ),
    path("retrieve/<int:pk>/", ListingRetreiverAPIView.as_view(), name="retrieve-update-listing" ),
    
    # Property Visit requests
    path("visit/", VisitPropertyRequestAPiView.as_view(), name="visit-request"),
]
