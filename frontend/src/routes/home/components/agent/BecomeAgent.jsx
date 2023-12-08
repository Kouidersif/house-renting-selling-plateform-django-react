import agentImage from "../../../../assets/images/agent/agent.png"
import { ButtonRadius } from "../../../../utils/exporter"

const BecomeAgent = () => {
    return (
        <section className="w-[95%] xl:w-[80%] mx-auto py-8 lg:py-16 px-4">
            <div className="w-full flex-col lg:flex-row bg-primary lg:h-[250px] lg:max-h-[250px] overflow-y-hidden 
            flex items-center gap-4 py-6 lg:py-0 text-center lg:text-start lg:gap-12 rounded-[2.5rem]">
                <div className="relative w-[360px] h-[300px] max-w-[360px]">
                    <img src={agentImage} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-white">Become an Agent</h2>
                    <p className="text-white">Fusce venenatis tellus a felis scelerisque. <br /> 
                    venenatis tellus a felis scelerisque. </p>
                </div>
                <ButtonRadius text={"Register Now"} styleClass="bg-white text-primary px-8 py-4" />
            </div>
        </section>
    )
}

export default BecomeAgent