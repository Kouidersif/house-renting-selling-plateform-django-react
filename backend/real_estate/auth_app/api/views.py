from .serializers import UserModelSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from auth_app.models import User


"""
Using a variable to store the serializer for future, to avoid repeatition, in case of - 
changing the name of SerializerClass

"""

serializer_class = UserModelSerializer

class UserCreationAPIView(generics.ListCreateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model.objects.all()
    
    
class UserRetrieveAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model
    
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)