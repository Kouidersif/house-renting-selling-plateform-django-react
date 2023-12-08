import InputField from "../../../utils/inputs/InputField"
import SelectInput from "../../../utils/select/SelectInput"
import farmLand from "../../../assets/svg/farm-land.svg"
import multiFamilyHouse from "../../../assets/svg/multi-family-house.svg"
import houseSVG from "../../../assets/svg/small-house.svg";
import flatSvg from "../../../assets/svg/flat-house.svg";
import { Link } from "react-router-dom";
import { ButtonRadius } from "../../../utils/exporter";

const CreateListing = () => {
    return (
        <section className="w-[95%] xl:w-[60%] mx-auto py-8 lg:py-16 px-4">
            <Link className="text-blue-600" to={"/"}>{"<"} Go back Home</Link>
            <form>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <>
                            <h4 className="my-7">Type of listing</h4>
                            <div className="w-full sm:w-3/4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">                                    {/* Radio Check */}
                                <div className="p-4 relative min-h-[1.5rem] text-center border-2">
                                    <input
                                        className="absolute right-3 top-3 rounded-full w-5 h-5"
                                        type="radio"
                                        name="typeOfListing"
                                        id="typeOfListing1"
                                    />
                                    <label className="flex flex-col" htmlFor="typeOfListing1">
                                        <img
                                            className="w-32 md:w-40 mb-3"
                                            src={houseSVG}
                                            alt="SVG"
                                        />
                                        <span className="block">House</span>
                                    </label>
                                </div>
                                <div className="p-4 relative min-h-[1.5rem] text-center border-2">
                                    <input
                                        className="absolute right-3 top-3 rounded-full w-5 h-5"
                                        type="radio"
                                        name="typeOfListing"
                                        id="typeOfListing2"
                                    />
                                    <label className="flex flex-col" htmlFor="typeOfListing2">
                                        <img
                                            className="w-32 md:w-40 mb-3"
                                            src={flatSvg}
                                            alt="SVG"
                                        />
                                        <span className="block">Flat</span>
                                    </label>
                                </div>
                                <div className="p-4 relative min-h-[1.5rem] text-center border-2">
                                    <input
                                        className="absolute right-3 top-3 rounded-full w-5 h-5"
                                        type="radio"
                                        name="typeOfListing"
                                        id="typeOfListing3"
                                    />
                                    <label className="flex flex-col" htmlFor="typeOfListing3">
                                        <img
                                            className="w-32 md:w-40 mb-3"
                                            src={multiFamilyHouse}
                                            alt="SVG"
                                        />
                                        <span className="block">Multi-family</span>
                                    </label>
                                </div>
                                <div className="p-4 relative min-h-[1.5rem] text-center border-2">
                                    <input
                                        className="absolute right-3 top-3 rounded-full w-5 h-5"
                                        type="radio"
                                        name="typeOfListing"
                                        id="typeOfListing4"
                                    />
                                    <label className="flex flex-col" htmlFor="typeOfListing4">
                                        <img
                                            className="w-32 md:w-40 mb-3"
                                            src={farmLand}
                                            alt="SVG"
                                        />
                                        <span className="block">Farm/Land</span>
                                    </label>
                                </div>



                            </div>
                            {/* End Row */}
                        </>

                    </div>
                    <InputField placeHolder="15514 14 AVE, WHITESTONE, NY, 11357"
                        labelName="Address" inputID="listingAddress" inputType="text" />
                    <div className="w-full grid grid-cols-2 gap-4">
                        <SelectInput labelName="Bedroom" optionsValue={["Select...", 1, 2, 3, 4, "+5"]} selectID="houseBedRooms" />
                        <SelectInput labelName="Bathroom" optionsValue={["Select...", 1, 2, 3, 4, "+5"]} selectID="houseBathRooms" />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <InputField placeHolder="Area" labelName="Area" inputType={"number"} inputID="listingArea" />
                        <SelectInput labelName="Year built" optionsValue={["Select year", 1999, 2000, 2003, 2004]} selectID="yearBuilr" />

                    </div>
                    <InputField placeHolder="Price" labelName="Price" inputType={"number"} inputID="listingPrice" />

                    {/* INPUT */}
                    <div className="flex items-center justify-center w-full">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    PNG, JPG, JPEG
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" multiple accept="image/*" />
                        </label>
                    </div>
                    {/* Button submit */}

                    <ButtonRadius text="Submit" styleClass="bg-primary hover:bg-primary/90 text-white mt-4 py-4" />

                </div>
            </form>


        </section>
    )
}

export default CreateListing