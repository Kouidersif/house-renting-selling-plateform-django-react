from django.urls import path
from .views import ( LandlordListCreateAPI)

urlpatterns = [
    path( "", LandlordListCreateAPI.as_view(), name="list-create-landlord-profile" )
]
