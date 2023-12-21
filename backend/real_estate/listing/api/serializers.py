from listing.models import (Listing, 
                            ListingImages, 
                            VisitRequest)
from rest_framework import serializers
from landlord.api.serializers import LandlordSerializer
from landlord.models import LandlordProfile
from .validator import listing_validator

class ListingImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingImages
        fields = ("id", "image")



class ListingSerializer(serializers.ModelSerializer):
    landlord_id = serializers.PrimaryKeyRelatedField(queryset=LandlordProfile.objects.all())
    listing_images = ListingImageSerializer(many=True, required=False) # there is a model called ListingImages inside the listing app
    files_img = serializers.ListField(
        child = serializers.FileField(max_length = 1000000, allow_empty_file = False, use_url = False),
        write_only = True
    )
    class Meta:
        model = Listing
        fields = ( "id", "landlord", "files_img", "listing_title", "address","num_bed_rooms", "listing_images", "landlord_id", 
                "num_bath_rooms", "property_area", "property_price", 
                "year_built", "listing_type", "contract_type", "is_public", "created_on" ) 
        depth = 1
        
    def create(self, validated_data):
        # # Additional layer of validation
        images_files = validated_data.get("files_img")
        # 
        data.pop("files_img")
        listing = Listing(
            **validated_data
        )
        listing.landlord = validated_data.get("landlord_id")
        listing.save()
        
        if images_files:
            for img in images_files:
                obj = ListingImages.objects.create(
                    image=img,
                    listing=listing
                )
                obj.save()
        
        return listing
