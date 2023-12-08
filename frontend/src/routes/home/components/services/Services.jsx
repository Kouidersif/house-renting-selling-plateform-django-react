import homeIcon from "../../../../assets/icons/icon_home_sm.png";
import bedIcon from "../../../../assets/icons/icon _bed_sm.png";
import searchIcon from "../../../../assets/icons/icon_search_sm.png";



const Services = () => {
    return (
        <section className="w-full py-8 lg:py-16 px-4 bg-[#F2F2F2]" id="services">
            <div className="w-[95%] xl:w-[80%] flex flex-col gap-12 mx-auto">
            <div className="flex flex-col items-center">
                    <h5>OUR SERVICES</h5>
                    <h2 className="text-[1.5rem] text-center sm:text-[2.4rem]">Donec porttitor euismod dignissim</h2>
            </div>
            {/* Cards */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                <div className="w-full md:w-80 h-80 pt-12 flex flex-col gap-6 items-center rounded-[2rem] bg-white">
                    <div className="flex justify-center items-center w-16 
                    h-16 bg-electric rounded-full cursor-pointer"
                    style={{filter: "drop-shadow(4px 10px 30px rgba(67, 97, 238, 0.40))"}}>
                        <img src={searchIcon} alt="" className="h-8 w-8 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h4>Buy a New Home</h4>
                        <p className="text-center text-sm font-normal text-custom-gray-dark">Donec porttitor euismod<br />  dignissim. Nullam a lacinia  <br /> ipsum, nec dignissim  <br /> purus.</p>
                    </div>
                </div>
                <div className="w-full md:w-80 h-80 pt-12 flex flex-col gap-6 items-center rounded-[2rem] bg-white">
                    <div className="flex justify-center items-center w-16 
                    h-16 bg-electric rounded-full cursor-pointer"
                    style={{filter: "drop-shadow(4px 10px 30px rgba(67, 97, 238, 0.40))"}}>
                        <img src={homeIcon} alt="" className="h-8 w-8 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h4>Buy a New Home</h4>
                        <p className="text-center text-sm font-normal text-custom-gray-dark">Donec porttitor euismod<br />  dignissim. Nullam a lacinia  <br /> ipsum, nec dignissim  <br /> purus.</p>
                    </div>
                </div>
                <div className="w-full md:w-80 h-80 pt-12 flex flex-col gap-6 items-center rounded-[2rem] bg-white">
                    <div className="flex justify-center items-center w-16 
                    h-16 bg-electric rounded-full cursor-pointer"
                    style={{filter: "drop-shadow(4px 10px 30px rgba(67, 97, 238, 0.40))"}}>
                        <img src={bedIcon} alt="" className="h-8 w-8 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h4>Buy a New Home</h4>
                        <p className="text-center text-sm font-normal text-custom-gray-dark">Donec porttitor euismod<br />  dignissim. Nullam a lacinia  <br /> ipsum, nec dignissim  <br /> purus.</p>
                    </div>
                </div>

            </div>
            </div>

        </section>

    )
}

export default Services