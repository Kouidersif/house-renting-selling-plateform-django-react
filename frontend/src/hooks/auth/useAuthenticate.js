import { useNavigate } from "react-router-dom";
import useGetAppContext from "../../../context/useGetAppContext";
import { appUrls } from "../../urls";
import useAxios from "../../../api/useAxios";

const useAuthenticate = () => {
    const api = useAxios()
    const navigate = useNavigate()
    const { setErrorApi, setUserObj, successAPI } = useGetAppContext()
    
    const loginFunc = async (formData)=>{
        try{
            const response = await api.post("/api/token/", formData)
            // Set token to cookies
            successAPI("Succesfully logged in!")
            navigate(appUrls.listing)
        }catch(err){
            if (err?.response?.status === 401){
                setErrorApi("No active account found with the given credentials")
            }else if(err?.response?.status === 500){
                setErrorApi("Server error, please try again!")
            }else{
                setErrorApi("Something went wrong")
            }
            
        }
    }

    const registrationFunc = async (formData)=>{
        try{
            const response = await api.post("/api/auth/", formData)
            navigate(appUrls.listing)
        }catch(err){
            if ( err?.response?.status === 400 && err?.response?.data?.email[0] ){
                setErrorApi(err?.response?.data?.email[0])
            }else if ( err?.response?.status === 400 && err?.response?.data[0] ) {
                setErrorApi( err?.response?.data[0] )
            }else if (err?.response?.status === 500){
                setErrorApi("Server Error")
            }else{
                setErrorApi("Error occured")
            }
        }
    }

    return { loginFunc, registrationFunc }
}

export default useAuthenticate