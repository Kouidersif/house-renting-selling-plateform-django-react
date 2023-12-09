from django.urls import path
from .views import (
    TenantListCreateAPI, RetrieveTenantAPIView
)

urlpatterns = [
    path("", TenantListCreateAPI.as_view(), name="list-create-tenant-profile"),
    path("retrieve/<int:pk>/", RetrieveTenantAPIView.as_view(), name="retrieve-tenant-profile"),
    
]
