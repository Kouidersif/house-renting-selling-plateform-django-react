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
        
        password = validate_password(pwd)
        
        
        user = self.Meta.model(
            **validated_data
        )
        user.set_password(password)
        user.save()
        return user
    
    def update(self, instance, validated_data):
        email = validated_data.get("email").lower()
        pwd = validated_data.get("password")
        if pwd:
            validate_password(pwd)
        instance.email = validated_data.get(email, instance.email)
        instance.password = validated_data.get("password", instance.password)
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        
        return instance
    
    