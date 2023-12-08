import { BaseParahraph, ListingCards } from "../../../../utils/exporter"
import { DummyData } from "../../../../../api/data";

const heroText = "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis \
ipsum molestie nibh malesuada, ac malesuada leo volutpat."


const RecentListings = () => {

    return (
        <section className="w-[95%] xl:w-[80%] mx-auto py-8 lg:py-16 px-4">
            <div className="flex flex-col gap-8">
                <div className="">
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <div>
                                <span className="text-electric">CHECKOUT OUR NEW</span>
                                <h2 className="font-semibold">Latest Listed Properties</h2>
                            </div>
                            <BaseParahraph text={heroText} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-12 justify-center">
                {
                            DummyData.slice(0, 3).map((data) => (
                                <>
                                        <ListingCards imgUrl={data.img} tag={data.tag} specialClass={""} />
                                </>
                            ))
                }
                </div>
            </div>
        </section>
    )
}

export default RecentListings;