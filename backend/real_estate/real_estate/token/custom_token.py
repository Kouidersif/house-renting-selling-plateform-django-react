from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView






class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        """
        Include more data to the token
        """
        token = super().get_token(user)
        # Add custom claims
        token['is_landlord'] = user.is_landlord
        token['is_tenant'] = user.is_tenant
        if user.is_landlord:
            token['landlord_profile_id'] = user.landlord.id
        if user.is_tenant:
            token['tenant_profile_id'] = user.tenant.id

        return token
    
    def validate(self, attrs):
        """
        Add more data to the response coming back from /api/token/
        EXAMPLE :
        call /api/token/ endpoint for a token, you get : 
        access : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVz..."
        refresh : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVz..."
        this will be added to the response ===> "is_landlord": false,
        this will be added to the response ===> "is_tenant": false
        """
        data = super().validate(attrs)
        # Add your extra responses here
        data['is_landlord'] = self.user.is_landlord
        data['is_tenant'] = self.user.is_tenant
        return data
    
    
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer