import PropTypes from "prop-types"

const InputField = ({placeHolder, labelName, inputType, inputID, value, onChangeFunc}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={inputID} className="">{labelName}</label>
            <input 
            value={value}
            onChange={(e)=> onChangeFunc(e.target.value)}
            type={inputType}
            name={inputID} 
            id={inputID}
            autoComplete={ inputType === "password" && "current-password" || ""}
            placeholder={placeHolder}
            className="w-full p-2 border-2 mt-1 rounded-xl"
            />
        </div>
    )
}

InputField.propTypes = {
    placeHolder: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputID: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeFunc: PropTypes.func,
}



export default InputField