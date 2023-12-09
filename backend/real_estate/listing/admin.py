from django.contrib import admin
from .models import (
    Listing,
    ListingImages,
    VisitRequest
)


admin.site.register(Listing)
admin.site.register(ListingImages)
admin.site.register(VisitRequest)
