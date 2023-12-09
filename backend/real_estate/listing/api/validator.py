from rest_framework import serializers



def listing_validator(data):
    """
    Additional layer of validation
    """
    landlord_id = data.pop("landlord_id", None)
    address = data.pop("address", None)
    num_bath_rooms = data.pop("num_bath_rooms", None)
    num_bed_rooms = data.pop("num_bed_rooms", None)
    property_price = data.pop("property_price", None)
    listing_type = data.pop("listing_type", None)
    year_built = data.pop("year_built", None)
    if landlord_id is None:
        raise serializers.ValidationError(
            "Landlord ID is missing"
            )
    if address is None or num_bath_rooms is None or num_bed_rooms is None or property_price is None or listing_type is None or year_built is None:
        raise serializers.ValidationError("All fields are required and cannot be empty")
    
    
    return data