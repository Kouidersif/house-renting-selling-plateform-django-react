from django.urls import path
from .views import ( 
LandlordListCreateAPI, RetrieveLandLordAPIView
)

urlpatterns = [
    path( "", LandlordListCreateAPI.as_view(), name="list-create-landlord-profile" ),
    path( "retrieve/<int:pk>/", RetrieveLandLordAPIView.as_view(), name="retrieve-landlord-profile" ),

]
