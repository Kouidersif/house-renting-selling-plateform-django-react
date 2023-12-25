from django.db import models
from landlord.models import LandlordProfile
from tenant.models import TenantProfile
from .utils import ( BED_ROOM_BATH_ROOM_NUMBER, REQUEST_STATUS, 
                    LISTING_TYPE, get_upload_path, CONTRACT_TYPE )


class Listing(models.Model):
    landlord = models.ForeignKey(LandlordProfile, related_name="listing_owner" , on_delete=models.SET_NULL, null=True)
    listing_title = models.CharField(max_length=399)
    address = models.CharField(max_length=350)
    description = models.TextField()
    num_bed_rooms = models.CharField(max_length=10, choices=BED_ROOM_BATH_ROOM_NUMBER)
    num_bath_rooms = models.CharField(max_length=10, choices=BED_ROOM_BATH_ROOM_NUMBER)
    property_area = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    property_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    year_built = models.CharField(max_length=299, null=True, blank=True)
    listing_type = models.CharField(max_length=299, choices=LISTING_TYPE)
    contract_type = models.CharField(max_length=299, choices=CONTRACT_TYPE)
    is_public = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        try:
            user = self.landlord.user.email
            if user:
                return f"Listing by { user }"
        except AttributeError:
            return f"Listing by Unassigned user"
    
    
    

class ListingImages(models.Model):
    listing = models.ForeignKey(Listing, related_name="listing_images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_upload_path)


    
class VisitRequest(models.Model):
    " A model allows tenants to request a visit or a call back "
    tenant = models.ForeignKey(TenantProfile,related_name="visit_tenant" , on_delete=models.CASCADE, null=True)
    landlord = models.ForeignKey(LandlordProfile, related_name="visit_landlord", on_delete=models.CASCADE, null=True)
    listing_obj = models.ForeignKey(Listing, related_name="listing_requested", on_delete=models.CASCADE, null=True)
    message = models.TextField()
    date_visit = models.DateTimeField()
    request_status = models.CharField(max_length=299, choices=REQUEST_STATUS)
    sent_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return f"A visit request sent by {self.tenant.user.email} - status : {self.request_status}"
    
