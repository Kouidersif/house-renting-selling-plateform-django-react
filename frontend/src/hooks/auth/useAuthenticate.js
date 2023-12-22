import { useNavigate } from "react-router-dom";
import useGetAppContext from "../../../context/useGetAppContext";
import { appUrls } from "../../urls";
import useAxios from "../../../api/useAxios";
import Cookies from 'js-cookie';
import { axiosInstancePublic } from "../../../api/AxiosInstance";


const useAuthenticate = () => {
    const api = axiosInstancePublic
    const navigate = useNavigate()
    const { setErrorApi, setUserObj, userObj, successAPI } = useGetAppContext()
    
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
            // Show a message to user then redirect
            navigate(appUrls.listing)
            successAPI("Succesfully logged in!")
            
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
            navigate(appUrls.listing)
            successAPI("Succesfully completed registration")
            
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