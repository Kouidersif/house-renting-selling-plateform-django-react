import propTypes from "prop-types"
import FormErrors from "../errors/FormErrors"

const InputField = ({placeHolder, labelName, inputType, inputID, value, onChangeFunc, err}) => {
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
            <FormErrors error={err} />
        </div>
    )
}

InputField.propTypes = {
    placeHolder: propTypes.string.isRequired,
    labelName: propTypes.string.isRequired,
    inputType: propTypes.string.isRequired,
    inputID: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChangeFunc: propTypes.func,
    err: propTypes.any,
    disabled: propTypes.bool
}



export default InputField