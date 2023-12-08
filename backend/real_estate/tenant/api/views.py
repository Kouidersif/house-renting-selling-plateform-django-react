from .serializers import TenantSerializer
from rest_framework import generics



class TenantListCreateAPI(generics.ListCreateAPIView):
    serializer_class = TenantSerializer
    queryset = serializer_class.Meta.model.objects.all()
    