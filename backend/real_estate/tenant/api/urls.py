from django.urls import path
from .views import (
    TenantListCreateAPI
)

urlpatterns = [
    path("", TenantListCreateAPI.as_view(), name="list-create-tenant-profile"),
    
]
