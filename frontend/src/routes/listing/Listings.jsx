import { ListingCards } from "../../utils/exporter"
import FilterBar from "./FilterBar"
import { Link } from "react-router-dom"
import useFetchListing from "../../hooks/listing/useFetchListing"
import { appUrls } from "../../urls"


const Listings = () => {
    const { listingOjbects, setAddress, setBedRoomsNum,
        setBathRoomsNum,
        setContractType,
        setListingType,address,
        bedRoomsNum,
        bathRoomsNum,
        contractType,
        listingType } = useFetchListing()

        address
        bedRoomsNum
        bathRoomsNum
        contractType
        listingType
    return (
        <div className="w-[95%] xl:w-[80%] mx-auto py-8 lg:py-16 px-4">
            <FilterBar setAddress={setAddress} setBedRoomsNum={setBedRoomsNum} address={address} 
                setBathRoomsNum={setBathRoomsNum}  bathroom={bathRoomsNum} bedrooms={bedRoomsNum}
                setContractType={setContractType}  contractType={contractType} listingType={listingType}
                setListingType={setListingType}   />
            <div className="w-full flex items-center md:justify-center flex-wrap gap-6 py-8 lg:py-16">
                {
                    listingOjbects?.map((data) => (
                        <Link key={data.id} to={`${appUrls.viewListing}/${data?.id}`}>
                            <ListingCards dataObj={data} tag={"Popular"} specialClass="w-full md:w-auto" />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Listings