import propTypes from "prop-types"
import React from "react";


const SelectInput = ({ labelName, selectID, optionsValue, onChangeValue, selectValue }) => {

    return (
        <div className="flex flex-col">
            <label htmlFor={selectID}>{labelName}</label>
            <select value={selectValue} onChange={(e) => onChangeValue(e.target.value)} className="w-full p-2 border-2 mt-1 rounded-xl"
            >
                <option value="">Select...</option>
                {
                    optionsValue?.map((value, idx) => (
                        <option value={value} key={idx}>{value}</option>
                    ))
                }

            </select>
        </div>
    )
}


SelectInput.propTypes = {
    labelName: propTypes.string.isRequired,
    selectID: propTypes.string.isRequired,
    optionsValue: propTypes.array.isRequired,
    onChangeValue: propTypes.func,
    selectValue: propTypes.string
}



export default SelectInput;