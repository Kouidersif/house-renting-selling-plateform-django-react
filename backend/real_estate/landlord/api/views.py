from .serializers import LandlordSerializer
from rest_framework import generics



class LandlordListCreateAPI(generics.ListCreateAPIView):
    serializer_class = LandlordSerializer
    queryset = serializer_class.Meta.model.objects.all()
    