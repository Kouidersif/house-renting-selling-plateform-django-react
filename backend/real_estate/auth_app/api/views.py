from .serializers import UserModelSerializer
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from auth_app.models import User
from .permission.user_permission import IsOwnerOrReadOnly
from real_estate.token.custom_token import MyTokenObtainPairSerializer
from django.contrib.auth import authenticate

"""
Using a variable to store the serializer for future, to avoid repeatition, in case of - 
changing the name of SerializerClass

"""

serializer_class = UserModelSerializer

class UserCreationAPIView(generics.CreateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model.objects.all()
    permission_classes = [ permissions.AllowAny ]
    def create(self, request, *args, **kwargs):
        """
        Auto authenticate user on registration. Generate a token once the - 
        user completes Registration
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        refresh = ""
        access_token = ""
        try:
            email = request.data.get("email")
            user_pwd = request.data.get("password")
            
            # # Authenticate user
            user = authenticate(email=email, password=user_pwd)
            # Generate tokens
            if user:
                token_view = MyTokenObtainPairSerializer()
                refresh = token_view.get_token(user)
                access_token = refresh.access_token
        except:
            print("error happened")
            
        response_data = {
            "data": serializer.data,
            "refresh": str(refresh),
            "access": str(access_token)
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    
    
class UserRetrieveAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model
    permission_classes = [ IsOwnerOrReadOnly ]
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)