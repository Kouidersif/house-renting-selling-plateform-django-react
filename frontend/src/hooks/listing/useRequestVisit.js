import useAxios from "../../../api/useAxios"
import useGetAppContext from "../../../context/useGetAppContext"


const useRequestVisit = () => {
    const api = useAxios()
    const { setSuccessApi, setErrorApi } = useGetAppContext()

    const sendRequestVisit = async (formData) =>{
        try{
            const response = await api.post("api/listing/visit/", formData)
            setSuccessApi("Request has been sent!")
        }catch(err){
            const errResp = err?.response
            if (errResp?.status === 400 && errResp?.data?.visited){
                setErrorApi(errResp?.data?.visited)
            }else if (errResp?.status === 500){
                setErrorApi("Server Error")
            }
        }
    }
    return { sendRequestVisit  }
}

export default useRequestVisit