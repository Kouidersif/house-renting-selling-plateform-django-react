from listing.models import (Listing, 
                            ListingImages, 
                            VisitRequest)
from rest_framework import serializers
from landlord.models import LandlordProfile
from .validator import listing_validator
from tenant.models import TenantProfile
from tenant.api.serializers import TenantSerializer
from landlord.api.serializers import LandlordSerializer




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
    landlord = serializers.SerializerMethodField()
    class Meta:
        model = Listing
        fields = ( "id", "landlord", "files_img", "listing_title", "address","num_bed_rooms", "listing_images", "landlord_id", 
                "num_bath_rooms", "property_area", "property_price", "description",
                "year_built", "listing_type", "contract_type", "is_public", "created_on" ) 
        depth = 2
    
    def get_landlord(self, obj):
        landlord = {
            "profile_img":obj.landlord.profile_img if obj.landlord.profile_img else "",
            "phonne_number": obj.landlord.phonne_number,
            "user": {
                "id": obj.landlord.user.id,
                "first_name": obj.landlord.user.first_name,
                "last_name": obj.landlord.user.last_name,
                "email": obj.landlord.user.email,
            }
        }
        return landlord
    def create(self, validated_data):
        # # Additional layer of validation
        images_files = validated_data.get("files_img")
        # 
        validated_data.pop("files_img")
        listing = Listing(
            **validated_data
        )
        listing.is_public = True
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




class VisitRequestSerializer(serializers.ModelSerializer):
    landlord_id = serializers.PrimaryKeyRelatedField(queryset=LandlordProfile.objects.all()) 
    tenant_id = serializers.PrimaryKeyRelatedField(queryset=TenantProfile.objects.all()) 
    listing_obj_id = serializers.PrimaryKeyRelatedField(queryset=Listing.objects.all())
    class Meta:
        model = VisitRequest
        fields = [ "tenant", "landlord", "date_visit", "message",
                "request_status", "listing_obj_id",
                "listing_obj", "sent_at", "landlord_id", "tenant_id"]
        depth = 1
    def create(self, validated_data):
        landlord = validated_data.pop("landlord_id")
        tenant = validated_data.pop("tenant_id")
        listing_obj = validated_data.pop("listing_obj_id")
        requested_before = VisitRequest.objects.filter(listing_obj__id=listing_obj.id, tenant__id=tenant.id).exists()
        
        if requested_before:
            raise serializers.ValidationError({"visited":"You have already requested to visit this property"})
        
        obj = VisitRequest.objects.create(
            **validated_data,
            listing_obj=listing_obj,
            landlord=landlord,
            tenant=tenant,
        )
        
        obj.save()
        
        return obj
        
