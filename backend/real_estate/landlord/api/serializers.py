from landlord.models import LandlordProfile
from rest_framework import serializers
from datetime import datetime



class LandlordSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandlordProfile
        fields = [ "id", "user", "agency_name", "profile_img", "nationality", "gender", "date_of_birth"  ]
    
    def create(self, validated_data):
        
        landlord = self.Meta.model(
            **validated_data
        )
        landlord.save()
        
        return landlord
    