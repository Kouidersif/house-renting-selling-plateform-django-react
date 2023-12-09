from .serializers import LandlordSerializer
from rest_framework import generics, status
from rest_framework.response import Response



serializer_class = LandlordSerializer

class LandlordListCreateAPI(generics.ListCreateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model.objects.all()
    
    

class RetrieveLandLordAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = serializer_class
    queryset = serializer_class.Meta.model
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        
        return Response(serializer.data, status=status.HTTP_200_OK)