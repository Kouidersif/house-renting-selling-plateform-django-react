from django.db import models
from django.contrib.auth import get_user_model
from auth_app.utils import GENDER
from django.conf import settings

User = settings.AUTH_USER_MODEL


class LandlordProfile(models.Model):
    user = models.OneToOneField(User,related_name="landlord",  on_delete=models.CASCADE)
    agency_name = models.CharField(max_length=350, null=True, blank=True)
    profile_img = models.ImageField(upload_to="landlord/profile/", null=True, blank=True)
    nationality = models.CharField(max_length=299, null=True)
    gender =  models.CharField(max_length=60, choices=GENDER)
    date_of_birth = models.DateTimeField(null=True, blank=True)
    
    def __str__(self):
        return f"Landlord Profile for {self.user.email}"
    