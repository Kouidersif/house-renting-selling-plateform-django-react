BED_ROOM_BATH_ROOM_NUMBER = (
    ("1", "1"),
    ("2", "2"),
    ("3", "3"),
    ("4", "4"),
    ("+5", "+5"),
)

CONTRACT_TYPE = [
    ("RENT", "RENT"),
    ("SELL", "SELL"),
]


REQUEST_STATUS = (
    ("Sent", "Sent"),
    ("Declined", "Declined"),
    ("Accepted", "Accepted"),
)


LISTING_TYPE = (
    ("Flat", "Flat"), 
    ("House", "House"),
    ("Multi-family", "Multi-family"),
    ("Farm/Land", "Farm/Land"),
)



def get_upload_path(instance, filename):
    try:
        # construct upload path by appending instance ID
        return f"listing/media/{filename}"
    except:
        return "listing/media/"