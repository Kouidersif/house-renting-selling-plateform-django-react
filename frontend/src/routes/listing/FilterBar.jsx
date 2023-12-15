import SelectInput from "../../utils/select/SelectInput"
import propTypes from "prop-types"

const FilterBar = ({setAddress, setBedRoomsNum,
                        setBathRoomsNum,
                        setContractType,
                        setListingType, address,
                        bedRoomsNum,
                        bathRoomsNum,
                        contractType,
                        listingType}) => {

    
    return (
        <div className="px-4 lg:px-12 w-full">
            {/* Start coding here */}
            <div className="relative border-2 w-full shadow-md  sm:rounded-lg">
                <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <form className="flex flex-col">
                            <label htmlFor="simple-search">
                                location
                            </label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 "
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e)=> setAddress(e.target.value)}
                                    id="simple-search"
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 "
                                    placeholder="location"
                                    required=""
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <div className="flex items-center flex-wrap w-full space-x-3 md:w-auto">
                            <SelectInput selectValue={bedRoomsNum} onChangeValue={setBedRoomsNum} labelName="Rooms" selectID="roomsOptions" optionsValue={["1", "2", "3", "4", "+5"]} />
                            <SelectInput selectValue={bathRoomsNum} onChangeValue={setBathRoomsNum} labelName="Bathrooms" selectID="bathRoomsOptions" optionsValue={["1", "2", "3", "4", "+5"]} />
                            <SelectInput selectValue={contractType} onChangeValue={setContractType} labelName="Contract" selectID="contracType" optionsValue={["RENT", "SELL"]} />
                            <SelectInput selectValue={listingType} onChangeValue={setListingType} labelName="Type" selectID="propertyType" optionsValue={["Flat", "House", "Multi-family", "Farm/land"]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

FilterBar.propTypes = {
    setAddress: propTypes.func,
    setBedRoomsNum : propTypes.func,
    setBathRoomsNum : propTypes.func,
    setContractType : propTypes.func,
    setListingType : propTypes.func,
    address : propTypes.string.isRequired,
    bedRoomsNum : propTypes.string.isRequired,
    bathRoomsNum : propTypes.string.isRequired,
    contractType : propTypes.string.isRequired,
    listingType : propTypes.string.isRequired,
}

export default FilterBar