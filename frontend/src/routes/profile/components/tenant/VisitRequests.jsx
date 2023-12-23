import { Link } from "react-router-dom"
import { DummyData } from "../../../../../api/data"
import { ListingCards } from "../../../../utils/exporter"


const VisitRequests = () => {
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
                DummyData.slice(0, 2).map((data, idx)=>(
                    <Link to={""} key={uuid + idx}>
                        <ListingCards tag={data.tag} imgUrl={data.img} specialClass={""} />
                    </Link>
                ))
            }
        </div>
</>
    )
}

export default VisitRequests