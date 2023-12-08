import { BaseParahraph } from "../../../../utils/exporter";
import userIcon from "../../../../assets/icons/icon_user_octagon_.svg"
import smartHomeIcon from "../../../../assets/icons/icon_smart_home_.svg"
import bedRoomModernImg from "../../../../assets/images/about/bedroom-new.jpg";
import livingRoomImg from "../../../../assets/images/about/living-room.jpg";
import houseOutsideView from "../../../../assets/images/about/modern-residential-building.jpg";





const heroText = "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis \
ipsum molestie nibh malesuada, ac malesuada leo volutpat."



const AboutUs = () => {
    return (
        <section className="w-[95%] xl:w-[80%] mx-auto py-8 lg:py-16 px-4" id="about">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex w-full lg:w-1/2 flex-col gap-8">
                    <div className="flex flex-col gap-4">
                    <div>
                        <span className="text-electric">WHO ARE WE</span>
                        <h2 className="max-[480px]:text-4xl font-semibold">Assisting individuals in locating the appropriate real estate.</h2>
                    </div>
                    <BaseParahraph text={heroText} />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-6 w-[450px] max-w-full px-4 sm:px-8 py-4 rounded-3xl cursor-pointer hover:scale-105 duration-300 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.3)]">
                            <img src={smartHomeIcon} alt="" />
                            <div className="flex flex-col">
                                <h4 className="text-electric">Donec porttitor euismod</h4>
                                <BaseParahraph text={"Nullam a lacinia ipsum, nec dignissim purus. Nulla"} />
                            </div>
                        </div>
                        <div className="flex gap-6 w-[450px] max-w-full px-4 sm:px-8 py-4 rounded-3xl cursor-pointer hover:scale-105 duration-300 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.3)]">
                            <img src={userIcon} alt="" />
                            <div className="flex flex-col">
                                <h4 className="text-electric">Donec porttitor euismod</h4>
                                <BaseParahraph text={"Nullam a lacinia ipsum, nec dignissim purus. Nulla"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 max-h-[500px] grid grid-cols-2 grid-rows-5 gap-3 ">
                    <div className="row-span-5">
                    <img src={houseOutsideView} className="w-full h-full  object-cover rounded-3xl" alt="" />
                    </div>
                    <div className="row-span-3">
                    <img src={bedRoomModernImg} className="w-full h-full object-cover rounded-3xl" alt="" />
                    </div>
                    <div className="row-span-2">
                    <img src={livingRoomImg} className="w-full h-full object-cover rounded-3xl" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs