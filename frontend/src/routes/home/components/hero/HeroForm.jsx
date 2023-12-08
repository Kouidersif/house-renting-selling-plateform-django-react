
import { ButtonRadius } from '../../../../utils/exporter'
import InputField from '../../../../utils/inputs/InputField'
import SelectInput from '../../../../utils/select/SelectInput'

const HeroForm = () => {
    return (
        <div className="w-full xl:flex-1 max-w-[30rem]">
            <form className="bg-white pb-16 pt-6 rounded-3xl">
                <div className="w-4/5 mx-auto flex flex-col gap-12">
                    <ul className="flex items-center gap-4 border-b-2 border-b-custom-gray-dark">
                        <li className="w-2/4 text-center text-custom-gray-dark hover:text-primary py-6 hover:border-b-[3px] hover:border-b-primary cursor-pointer">For Sale</li>
                        <li className="w-2/4 text-center text-custom-gray-dark hover:text-primary py-6 hover:border-b-[3px] hover:border-b-primary cursor-pointer">For Rent</li>
                    </ul>
                    {/* Form start */}
                    <div className="w-full mx-auto flex flex-col gap-6">
                        {/* Input  */}
                        <InputField labelName={"Location"} placeHolder={"New York, San Francisco, etc"} inputID={"locationFilter"} inputType={"text"}  />
                        {/* DropDown */}
                        <SelectInput selectID={"propertyType"} labelName={"Property Type"} optionsValue={["option"]} />
                        <SelectInput selectID={"roomsNum"} labelName={"Number of rooms"} optionsValue={["option"]} />
                        {/* Filter */}
                        <span className="flex gap-2 text-primary cursor-pointer">
                            <i className="bi bi-sliders2-vertical"></i>
                            Advanced Search
                        </span>
                    </div>
                    <ButtonRadius text={`Search`} styleClass="bg-primary py-2 text-white hover:bg-white hover:text-primary border-2 border-primary" />
                </div>
            </form>
        </div>
    )
}

export default HeroForm