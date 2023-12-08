import { ListingCards } from "../../../utils/exporter"
import { DummyData } from "../../../../api/data"

const SavedListings = () => {

    const uuid = crypto.randomUUID()
    return (
        <>
        <div className="flex items-center justify-between mb-8">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Bookings saved for later
                </h5>
        </div>
        
        <div className="flex gap-4 flex-wrap">
            {
                DummyData.map((data, idx)=>(
                    <ListingCards key={uuid + idx} tag={data.tag} imgUrl={data.img} specialClass={""} />
                ))
            }
        </div>
</>
    )
}

export default SavedListings