import propTypes from "prop-types"
import FormErrors from "../errors/FormErrors";



const SelectInput = ({ labelName, selectID, optionsValue, onChangeValue, selectValue, err }) => {

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
            <FormErrors error={err} />
        </div>
    )
}


SelectInput.propTypes = {
    labelName: propTypes.string.isRequired,
    selectID: propTypes.string.isRequired,
    optionsValue: propTypes.array.isRequired,
    onChangeValue: propTypes.func,
    selectValue: propTypes.string,
    err: propTypes.any
}



export default SelectInput;