from rest_framework import serializers



def listing_validator(data):
    """
    Additional layer of validation
    """
    landlord_id = data.get("landlord_id", None)

    address = data.get("address", None)
    address = data.get("title", None)
    num_bath_rooms = data.get("num_bath_rooms", None)
    num_bed_rooms = data.get("num_bed_rooms", None)
    property_price = data.get("property_price", None)
    property_area = data.get("property_price", None)
    listing_type = data.get("listing_type", None)
    year_built = data.get("year_built", None)
    if landlord_id == "":
        raise serializers.ValidationError(
            "Landlord ID is missing"
            )
    if address == "" or property_area == "" or num_bath_rooms == "" or num_bed_rooms == "" or property_price == "" or listing_type == "" or year_built == "":
        raise serializers.ValidationError("All fields are required and cannot be empty")
    
    
    return data