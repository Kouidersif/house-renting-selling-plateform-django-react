from listing.models import (Listing, 
                            ListingImages, 
                            VisitRequest)
from rest_framework import serializers
from landlord.api.serializers import LandlordSerializer
from landlord.models import LandlordProfile
from .validator import listing_validator


class ListingSerializer(serializers.ModelSerializer):
    landlord_id = serializers.PrimaryKeyRelatedField(queryset=LandlordProfile.objects.all())
    class Meta:
        model = Listing
        fields = ( "id", "landlord", "address","num_bed_rooms" , "landlord_id", 
                "num_bath_rooms", "property_area", "property_price", 
                "year_built", "listing_type",  "is_public", "created_on" ) 
        depth = 1
        
    def create(self, validated_data):
        # Additional layer of validation
        listing_validator(validated_data)
        # 
        listing = Listing(
            **validated_data
        )
        listing.landlord = validated_data.get("landlord_id")
        listing.save()
        return listing
