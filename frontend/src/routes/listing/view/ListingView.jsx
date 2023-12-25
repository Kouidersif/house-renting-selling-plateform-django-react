import { useParams } from "react-router-dom"
import useFetchListing from "../../../hooks/listing/useFetchListing"
import { useEffect } from "react"
import VisitRequestForm from "./VisitRequestForm"



const ListingView = () => {
    const { listingDetailFetch, listingDetail } = useFetchListing()
    const { id } = useParams()


    useEffect(()=>{
        listingDetailFetch(id)
    }, [])

    

    return (
        <div className="w-[95%] xl:w-[80%] mx-auto py-8 lg:py-16 px-4">
            <div className="flex justify-end items-center gap-4 px-4 mb-4">
                <h5 className="text-slate-500">Save 💛</h5>
                <h5 className="text-slate-500">Share 🌐</h5>
            </div>

            <div className="max-h-[500px] grid grid-cols-3 grid-rows-6 gap-2">
                <div className="row-span-6 col-span-2">
                    <img src={listingDetail?.listing_images && listingDetail?.listing_images[0]?.image}
                        alt="" className="w-full h-full object-cover rounded-s-xl" />
                </div>
                <div className="row-span-3 col-span-1">
                    <img src={listingDetail?.listing_images && listingDetail?.listing_images[1]?.image}
                        alt="" className="w-full h-full object-cover rounded-s-xl" />
                </div>
                <div className="row-span-3 col-span-1">
                    <img src={listingDetail?.listing_images && listingDetail?.listing_images[2]?.image}
                        alt="" className="w-full h-full object-cover rounded-s-xl" />
                </div>
            </div>
            <h6 className="text-end mt-4"><b>Published: </b><span className="text-slate-500">December 27, 2018</span></h6>
            <div className="relative flex gap-12 flex-wrap lg:flex-nowrap py-8 lg:py-16 border-b-2">
                <div className="w-full lg:w-[66.6%] flex flex-col gap-12 lg:gap-4 border-b-2 pb-4">
                    <div className="flex flex-wrap justify-between lg:justify-normal lg:flex-nowrap items-center gap-4 lg:gap-48">
                        <address className="not-italic"><span className="text-3xl font-semibold">470 Lucy Forks</span>
                            <br /><span className="font-light text-lg text-slate-500">Patriciafurt, YC7B, London, England</span></address>
                        <h4 className="font-semibold text-2xl">$ {listingDetail?.property_price} {`${listingDetail?.contract_type === "RENT" ? "/mo" : ""}`} <br />
                            <span className="text-lg font-light text-slate-500">{listingDetail?.num_bed_rooms} bed - {listingDetail?.num_bath_rooms} bath - {listingDetail?.property_area} sqft</span>
                        </h4>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">Home details:</h3>
                        <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 lg:gap-48">
                            <ul className="w-full lg:w-1/2 flex flex-col gap-3">
                                <li className="text-xl flex justify-between"><span className="font-medium">Year Built :</span> <span className="text-lg text-slate-500">{listingDetail?.year_built}</span></li>
                                <li className="text-xl flex justify-between"><span className="font-medium">Type :</span> <span className="text-lg text-slate-500">{listingDetail?.listing_type}</span></li>
                                <li className="text-xl flex justify-between"><span className="font-medium">Contract Type :</span> <span className="text-lg text-slate-500">{listingDetail?.contract_type}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t-2 border-b-2 py-5">
                        <div className="flex justify-between gap-4 lg:gap-0 lg:justify-around flex-wrap">
                            <h6 className="font-semibold"><span className="text-slate-500 font-medium">Last 30 days</span>: 920 page views</h6>
                            <h6 className="font-semibold"><span className="text-slate-500 font-medium">Last 30 days</span>: 920 page views</h6>
                        </div>
                    </div>
                    <div className="py-8">
                        <h5 className="font-semibold text-xl mb-4">Description</h5>
                        <p className="max-w-full text-slate-500 text-base">
                            {listingDetail?.description?.substring(0, 294)}
                            <br />
                            <br />
                            {listingDetail?.description?.substring(294, listingDetail?.description?.length)}
                        </p>
                    </div>
                    <div className="pt-6 border-t-2">
                        <h4 className="mb-4">Agent:</h4>
                        <div className="flex gap-4">
                            <div>
                                <img className="w-24 h-24 " src="https://htmlstream.com/preview/front-v4.3.1/assets/img/160x160/img6.jpg" alt="Bordered avatar" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-medium text-xl">{listingDetail?.landlord?.user?.first_name} {listingDetail?.landlord?.user?.last_name}</h3>
                                <a href="" className="text-slate-500">📞 {listingDetail?.landlord?.phonne_number}</a>
                                <a className="font-medium text-primary cursor-pointer" 
                                href={`callto:${listingDetail?.landlord?.phonne_number}`}>📨 Contact agent</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <aside className="w-full sm:w-[70%] mx-auto lg:w-[33.3%] sticky top-24 self-start ">
                <VisitRequestForm landlordID={listingDetail?.landlord_id} listingID={listingDetail?.id} />
                </aside>
            </div>
        </div>
    )
}

export default ListingView