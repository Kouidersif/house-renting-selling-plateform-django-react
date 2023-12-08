import IMG1 from "../../../../assets/images/about/bedroom-new.jpg"
import IMG2 from "../../../../assets/images/about/bedroom-new.jpg"
import IMG3 from "../../../../assets/images/about/bedroom-new.jpg"
import IMG4 from "../../../../assets/images/about/bedroom-new.jpg"
import IMG5 from "../../../../assets/images/about/bedroom-new.jpg"


const HighlightCities = () => {
    return (
        <section className="w-full py-8 lg:py-16 px-4">
            <div className="w-[95%] xl:w-[80%] flex flex-col gap-12 mx-auto">
                <div>
                    <span className="text-electric">AREAS ACROSS THE TOWN</span>
                    <h2 className="font-semibold">Neighborhood Properties</h2>
                </div>
                <div className="flex items-center flex-wrap gap-4 md:gap-8">
                <div className={`relative isolate after:opacity-50 after:content-[''] after:w-full after:h-full after:absolute after:bg-black/60 after:rounded-3xl after:bottom-0 after:right-0 after:z-[-1] flex items-end bg-no-repeat bg-center rounded-3xl w-full md:w-[350px] h-[300px] p-4 bg-cover`}
                style={{backgroundImage:`url(${IMG1})`}}>
                    <div className="flex flex-col">
                        <h2 className="text-white/70">250</h2>
                        <h4 className="text-white">New York City, NY</h4>

                    </div>
                </div>
                <div className={`relative isolate after:opacity-50 after:content-[''] after:w-full after:h-full after:absolute after:bg-black/60 after:rounded-3xl after:bottom-0 after:right-0 after:z-[-1] flex items-end bg-no-repeat bg-center rounded-3xl w-full md:w-[350px] h-[300px] p-4 bg-cover`}
                style={{backgroundImage:`url(${IMG2})`}}>
                    <div className="flex flex-col">
                        <h2 className="text-white/70">250</h2>
                        <h4 className="text-white">New York City, NY</h4>

                    </div>
                </div>
                <div className={`relative isolate after:opacity-50 after:content-[''] after:w-full after:h-full after:absolute after:bg-black/60 after:rounded-3xl after:bottom-0 after:right-0 after:z-[-1] flex items-end bg-no-repeat bg-center rounded-3xl h-[300px] flex-1 p-4 bg-cover`}
                style={{backgroundImage:`url(${IMG3})`}}>
                    <div className="flex flex-col">
                        <h2 className="text-white/70">250</h2>
                        <h4 className="text-white">New York City, NY</h4>

                    </div>
                </div>
                <div className={`relative isolate after:opacity-50 after:content-[''] after:w-full after:h-full after:absolute after:bg-black/60 after:rounded-3xl after:bottom-0 after:right-0 after:z-[-1] flex items-end bg-no-repeat bg-center rounded-3xl w-full md:w-[350px] h-[300px] p-4 bg-cover`}
                style={{backgroundImage:`url(${IMG4})`}}>
                    <div className="flex flex-col">
                        <h2 className="text-white/70">250</h2>
                        <h4 className="text-white">New York City, NY</h4>

                    </div>
                </div>
                <div className={`relative isolate after:opacity-50 after:content-[''] after:w-full after:h-full after:absolute after:bg-black/60 after:rounded-3xl after:bottom-0 after:right-0 after:z-[-1] flex items-end bg-no-repeat bg-center rounded-3xl h-[300px] flex-1 p-4 bg-cover`}
                style={{backgroundImage:`url(${IMG5})`}}>
                    <div className="flex flex-col">
                        <h2 className="text-white/70">250</h2>
                        <h4 className="text-white">New York City, NY</h4>

                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default HighlightCities