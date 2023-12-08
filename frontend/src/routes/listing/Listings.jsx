import { ListingCards } from "../../utils/exporter"
import FilterBar from "./FilterBar"
import { DummyData } from "../../../api/data"
import { Link } from "react-router-dom"


const Listings = () => {
    const uuid = crypto.randomUUID()
    return (
        <div className="w-[95%] xl:w-[80%] mx-auto py-8 lg:py-16 px-4">
            <FilterBar />
            <div className="w-full flex items-center md:justify-center flex-wrap gap-6 py-8 lg:py-16">
                {
                    DummyData.map((data, idx)=>(
                        <Link  key={uuid + idx} to={"/"}>
                        <ListingCards imgUrl={data.img} tag={data.tag} specialClass="w-full md:w-auto" />
                        </Link>
                    ))
                }
            
            </div>
        </div>
    )
}

export default Listings