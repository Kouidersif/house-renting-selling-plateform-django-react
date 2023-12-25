import { useNavigate } from "react-router-dom";
import useAxios from "../../../api/useAxios";
import useGetAppContext from "../../../context/useGetAppContext";
import { appUrls } from "../../urls";


const useCreateListing = () => {
    const api = useAxios()
    const navigate = useNavigate()
    const { setFormsError, setErrorApi, setSuccessApi } = useGetAppContext()

    const createObject = async (formData) => {
        try {
            setFormsError("")
            const response = await api.post("api/listing/create/", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                },)
            setSuccessApi("Listing has been created")
            navigate(appUrls.listing)
        } catch (err) {
            const resp = err?.response
            if ( resp?.status === 400 ){
                // Handle validation errors
                    const errorData = resp?.data;
                    setFormsError(errorData)
                    
            }else if ( resp?.status === 500 ){
                setErrorApi("Something went wrong from our side, try again please")
            }

        }
    }

    return { createObject }
}

export default useCreateListing