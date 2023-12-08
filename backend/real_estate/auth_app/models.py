from django.db import models
from .utils import GENDER
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from tenant.models import TenantProfile
from landlord.models import LandlordProfile
from django.db.models.signals import post_save
from django.dispatch import receiver




class User(AbstractUser):
    email       =  models.EmailField(unique=True, null=False, blank=False)
    username    =  models.CharField(max_length=299, null=True, blank=True)
    is_landlord =  models.BooleanField(default=False)
    is_tenant   =  models.BooleanField(default=False)
    
    USERNAME_FIELD = "email" 
    REQUIRED_FIELDS = ["username"]
    
    def __str__(self):
        return self.email
    


@receiver(signal=post_save, sender=User)
def createUserProfile(instance, created, **kwargs):
    if created and instance.is_tenant:
        TenantProfile.objects.create(user=instance)
    elif created and instance.is_landlord:
        LandlordProfile.objects.create(user=instance)


