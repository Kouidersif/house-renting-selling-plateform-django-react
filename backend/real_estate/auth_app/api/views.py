from .serializers import UserModelSerializer
from rest_framework import generics, status
from auth_app.models import User

class UserCreationAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer