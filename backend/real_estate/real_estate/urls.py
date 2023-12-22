
from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenBlacklistView
)
from .token.custom_token import MyTokenObtainPairView





urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include("auth_app.api.urls")),
    path('api/landlord/', include("landlord.api.urls")),
    path('api/tenant/', include("tenant.api.urls")),
    path('api/listing/', include("listing.api.urls")),
    
    # Auth
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
]
