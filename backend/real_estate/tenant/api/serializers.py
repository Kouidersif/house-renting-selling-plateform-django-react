from tenant.models import TenantProfile
from rest_framework import serializers




class TenantSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TenantProfile
        fields = [ "id", "user", "profile_img", "nationality", "phonne_number", "gender", "date_of_birth"  ]
    
    def create(self, validated_data):
        
        tenant = self.Meta.model(
            **validated_data
        )
        tenant.save()
        
        return tenant

