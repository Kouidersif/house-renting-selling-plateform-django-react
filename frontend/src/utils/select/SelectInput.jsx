import PropTypes from "prop-types"


const SelectInput = ({labelName, selectID, optionsValue}) => {

    let uuid = crypto.randomUUID()
return (
    <div className="flex flex-col">
            <label htmlFor={selectID}>{labelName}</label>
            <select className="w-full p-2 border-2 mt-1 rounded-xl" name={selectID} id={selectID}>
                {
                    optionsValue?.map((value, idx)=>(
                    
                        <option key={uuid + idx} value={value}>{value}</option>
                        
                    )) 
                }
                
            </select>
    </div>
)
}


SelectInput.propTypes = {
    labelName: PropTypes.string.isRequired,
    selectID: PropTypes.string.isRequired,
    optionsValue: PropTypes.array.isRequired,
}



export default SelectInput