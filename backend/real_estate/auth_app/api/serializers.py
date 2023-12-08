from rest_framework import serializers
from auth_app.models import User
from .validators import validate_password, validate_email





class UserModelSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = [ "id", "email", "is_landlord", "is_tenant", "landlord", "tenant" , "password" ]
        depth = 1
    
    def create(self, validated_data):
        pwd = validated_data["password"]
        email = validated_data["email"]
        
        
        validate_email(self.Meta.model, email)
        
        validate_password(pwd)
        
        
        user = self.Meta.model(
            **validated_data
        )
        user.save()
        return user
    
    