import propTypes from "prop-types";





const FormErrors = ({error}) => {
    return (
        <>
        {
            
            Array.isArray(error) ?

            <ul>
                {
                    error?.map((err, idx)=>(
                        <li key={idx} className="text-red-600">{err}</li>
                    ))
                }
                
            </ul>

            :
            <span className="text-red-600 mt-2">{error}</span>
        }
        
        
        </>
    )
}

FormErrors.propTypes = {
    error : propTypes.any,
}

export default FormErrors