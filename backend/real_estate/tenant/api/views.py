from .serializers import TenantSerializer
from rest_framework import generics, status
from rest_framework.response import Response


serializer_class = TenantSerializer
class TenantListCreateAPI(generics.ListCreateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model.objects.all()
    

class RetrieveTenantAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    