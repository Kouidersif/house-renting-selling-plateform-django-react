import { BaseParahraph } from "../../../../utils/exporter";
import bedRoomImg from "../../../../assets/images/about/bedroom-new.jpg";
import HeroForm from "./HeroForm";
const heroText = "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus."


const HeroSection = () => {
    return (
        <section className="w-full py-8 relative">
            <div className="w-[95%] xl:w-[80%] mx-auto flex 
            flex-col gap-16 lg:flex-row lg:gap-4 lg:justify-between items-center">
                <div className="flex flex-col gap-4 w-full xl:w-2/4">
                    <div>
                        <span className="text-electric">REAL ESTATE</span>
                        <h1 className="max-[480px]:text-4xl">Find a perfect <br /> home you love..!</h1>
                    </div>
                    <BaseParahraph text={heroText} />
                    <div className="w-full lg:max-w-[600px] relative">
                        <div className="w-full h-[400px] lg:w-[600px] overflow-hidden">
                        <img src={bedRoomImg} alt="" className="w-full h-full rounded-3xl object-cover" />
                        </div>
                        <div className="absolute -top-6 right-6 sm:-right-6 -z-10 w-12 h-12 rounded-full"
                            style={{ background: 'linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0.00) 100%)' }}>

                        </div>

                    </div>
                </div>
                {/* Form */}
                <HeroForm />
                {/* EndForm */}
            </div>
            <div className="w-full h-full absolute -z-20 top-0"
                style={{ background: 'linear-gradient(180deg, rgba(76, 201, 240, 0.00) 0%, rgba(67, 97, 238, 0.30) 100%)' }}
            />

            <div className="flex justify-center flex-wrap md:flex-nowrap gap-3 mt-12">
                <div className="flex items-center justify-center bg-white max-w-sm py-4 px-8 gap-3 rounded-full">
                <div className="flex -space-x-4">
                    <img
                        className="w-10 h-10 border-2 border-white rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 border-2 border-white rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 border-2 border-white rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 border-2 border-white rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 border-2 border-white rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                    />

                    <a
                        className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600"
                        href="#"
                    >
                        +
                    </a>
                </div>
                <h4>72k+ Happy <br /> Customers</h4>
                </div>
                <div className="flex items-center justify-center bg-white max-w-sm py-4 px-8 gap-3 rounded-full">
                <div className="flex -space-x-4">
                    <img
                        className="w-16 h-16 border-2 border-white rounded-full"
                        src={bedRoomImg}
                        alt=""
                    />
                </div>
                <h4>200+ New Listings Everyday!</h4>
                </div>

            </div>

            <div className="hidden xl:block absolute -bottom-12 left-6 sm:left-48 w-28 h-28 rounded-full opacity-50 rotate-[-70deg]"
            style={{ background: 'linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0.00) 100%)' }}>

            </div>
        </section>
    )
}

export default HeroSection