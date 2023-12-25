from landlord.models import LandlordProfile
from rest_framework import serializers
from datetime import date

class LandlordSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandlordProfile
        fields = [ "id", "user", "agency_name", "profile_img", "phonne_number", "nationality", "gender", "date_of_birth"  ]

    
    def create(self, validated_data):
        
        landlord = self.Meta.model(
            **validated_data
        )
        landlord.save()
        
        return landlord
    
    def update(self, instance, validated_data):
        birthdate = validated_data.get("date_of_birth")
        today = date.today()
        age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
        if age < 18:
            raise serializers.ValidationError({"date_of_birth":"Your age must be above 18"})
        instance.agency_name = validated_data.get("agency_name", instance.agency_name)
        instance.profile_img = validated_data.get("profile_img", instance.profile_img)
        instance.nationality = validated_data.get("nationality", instance.nationality)
        instance.phonne_number = validated_data.get("phonne_number", instance.phonne_number)
        instance.gender = validated_data.get("gender", instance.gender)
        instance.date_of_birth = validated_data.get("date_of_birth", instance.date_of_birth)
        instance.save()
        return instance
    