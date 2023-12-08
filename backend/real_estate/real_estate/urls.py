
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include("auth_app.api.urls")),
    path('api/landlord/', include("landlord.api.urls")),
    path('api/tenant/', include("tenant.api.urls")),
]
