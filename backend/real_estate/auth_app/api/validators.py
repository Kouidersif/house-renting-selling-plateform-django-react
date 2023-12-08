from rest_framework import serializers
import re

def validate_password(value):
        """
        Validate password constraints.
        """
        # Define password constraints
        min_length = 8
        has_uppercase = re.search(r'[A-Z]', value)
        has_lowercase = re.search(r'[a-z]', value)
        has_digit = re.search(r'[0-9]', value)
        has_special_char = re.search(r'[!@#$%^&*()\-_=+{};:,<.>]', value)
        # Check for minimum length
        if len(value) < min_length:
            raise serializers.ValidationError("Password must be at least 8 characters long.")

        # Check for uppercase, lowercase, digit, and special character presence
        if not (has_uppercase and has_lowercase and has_digit and has_special_char):
            raise serializers.ValidationError(
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
            )

        return value
    
    
    
def validate_email(model, value):
    exists = model.objects.filter(email=value.lower())
    if exists:
        raise serializers.ValidationError("Email address already exists - Login instead")
    
    return value