import { ListingCards } from '../../../../utils/exporter'
import useFetchListing from '../../../../hooks/listing/useFetchListing';
import useGetAppContext from '../../../../../context/useGetAppContext';

const LandlordListing = () => {
    const { listingOjbects } = useFetchListing()
    const { decodedToken } = useGetAppContext()
    const { landlord_profile_id } = decodedToken

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <h5 className="text-xl font-bold leading-none text-gray-900">
                    Bookings you shared
                </h5>
            </div>

            <div className="flex gap-4 flex-wrap">
                {
                    listingOjbects?.filter(obj=> obj?.landlord?.id === landlord_profile_id).map((data) => (
                        <ListingCards key={data.id} dataObj={data} tag={"Popular"} imgUrl={data.listing_images[0]} specialClass={""} />
                    ))
                }
            </div>
        </>
    )
}

export default LandlordListing