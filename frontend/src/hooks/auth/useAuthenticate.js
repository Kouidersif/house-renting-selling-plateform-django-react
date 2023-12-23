import { useNavigate } from "react-router-dom";
import useGetAppContext from "../../../context/useGetAppContext";
import { appUrls } from "../../urls";
import Cookies from 'js-cookie';
import { axiosInstancePublic } from "../../../api/AxiosInstance";


const useAuthenticate = () => {
    const api = axiosInstancePublic
    const navigate = useNavigate()
    const { setErrorApi, setUserObj,setSuccessApi, setFormsError,
        userObj } = useGetAppContext()
    
    const loginFunc = async (formData)=>{
        try{
            const response = await api.post("/api/token/", formData)
            const data = response?.data
            // Set token to cookies
            Cookies.set('access_token', data?.access, { secure: true, sameSite: 'strict' });
            Cookies.set('refresh_token', data?.refresh, { secure: true, sameSite: 'strict' });
            // Set user object
            setUserObj({
                ...userObj,
                access: data?.access,
                refresh: data?.refresh
            })
            setSuccessApi("Successfully Logged in")
            // Show a message to user then redirect
            navigate(appUrls.listing)
            
        }catch(err){
            if (err?.response?.status === 401){
                setErrorApi("No active account found with the given credentials")
            }else if(err?.response?.status === 500){
                setErrorApi("Server error, please try again!")
            }
            
        }
    }

    const registrationFunc = async (formData)=>{
        try{
            const response = await api.post("/api/auth/", formData)
            const data = response?.data
            // Set token to cookies
            Cookies.set('access_token', data?.access, { secure: true, sameSite: 'strict' });
            Cookies.set('refresh_token', data?.refresh, { secure: true, sameSite: 'strict' });
            
            // Set user object
            setUserObj({
                ...userObj,
                access: data?.access,
                refresh: data?.refresh
            })
            // Show a message to user then redirect
            setSuccessApi("Succesfully completed registration")
            navigate(appUrls.listing)
            
            
            
        }catch(err){
            const errResp = err?.response
            if ( errResp?.status === 400 && errResp?.data ){
                setFormsError(errResp?.data)
            }else if ( errResp?.status === 500){
                setErrorApi("Server Error")
            }
        }
    }

    return { loginFunc, registrationFunc }
}

export default useAuthenticate