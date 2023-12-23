import django_filters
from listing.models import Listing


class ListingFilter(django_filters.FilterSet):
    address        = django_filters.CharFilter(lookup_expr='icontains')
    num_bath_rooms = django_filters.CharFilter(lookup_expr='iexact')
    num_bed_rooms  = django_filters.CharFilter(lookup_expr='iexact')
    contract_type  = django_filters.CharFilter(lookup_expr='iexact')
    listing_type   = django_filters.CharFilter(lookup_expr='iexact')
    landlord   = django_filters.CharFilter(lookup_expr='exact')

    class Meta:
        model = Listing
        fields = [ "address", "listing_type", "contract_type", 
                    "num_bed_rooms", "num_bath_rooms", "landlord" ]