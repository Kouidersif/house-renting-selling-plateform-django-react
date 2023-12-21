import useAxios from "../../../api/useAxios";
import useGetAppContext from "../../../context/useGetAppContext";


const useCreateListing = () => {
    const api = useAxios()
    const { setFormsError, setErrorApi } = useGetAppContext()

    const createObject = async (formData) => {
        try {
            const response = await api.post("api/listing/create/", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                },)
            console.log("response: ", response?.data)
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