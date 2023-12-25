from .serializers import (
    ListingSerializer, 
    VisitRequestSerializer
)
from rest_framework.response import Response
from rest_framework import status, generics, permissions, authentication, filters
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_filters import rest_framework as filters
from .filter import ListingFilter


listing_serializer_class = ListingSerializer
request_visit_serializer_class = VisitRequestSerializer


class ListingAPIView(generics.ListAPIView):
    serializer_class = listing_serializer_class
    permission_classes = [ permissions.AllowAny ]
    queryset = serializer_class.Meta.model.objects.filter(is_public=True).order_by("id")
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ListingFilter



class CreateListingAPIView(generics.CreateAPIView):
    serializer_class = listing_serializer_class
    permission_classes = [ permissions.AllowAny ]
    
    
    

class ListingRetreiverAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = listing_serializer_class
    queryset = serializer_class.Meta.model
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.landlord != request.user.landlord:
            message = { "Error": "Credentials were not provided" }
            return Response(message, status=status.HTTP_403_FORBIDDEN)
        partial = kwargs.pop('partial', True)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
    
class VisitPropertyRequestAPiView(generics.CreateAPIView):
    serializer_class = request_visit_serializer_class
    queryset = serializer_class.Meta.model.objects.all()