import { useEffect, useState } from "react"
import useAxios from "../../../api/useAxios";
import useGetAppContext from "../../../context/useGetAppContext";


const useFetchUpdateProfile = () => {

    const [ account, setAccount] = useState({});
    const api = useAxios()
    const { setFormsError, setErrorApi, decodedToken, userObj, setSuccessApi } = useGetAppContext()
    const user_id = decodedToken?.user_id
    const landlord_profile_id = decodedToken?.landlord_profile_id
    const tenant_profile_id = decodedToken?.tenant_profile_id

    
    const fetchUser = async () =>{
        try{
            const response = await api.get(`api/auth/retrieve/${user_id}/`);
            setAccount(response?.data)
        }catch(err){
            console.log("error", err)

        }
    }
    const updateUserAccount = async (formData) =>{
        try{
            setFormsError("")
            const response = await api.put(`api/auth/retrieve/${user_id}/`, formData);
            setSuccessApi("Account has been updated")
        }catch(err){
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

    

    const updateUserProfile = async (formData) =>{
        let url;
        try{
            url = decodedToken?.is_landlord ? `landlord/retrieve/${landlord_profile_id}/` : decodedToken?.is_tenant ? `tenant/retrieve/${tenant_profile_id}/` : null
            setFormsError("")
            const response = await api.put(`api/${url}`, formData);
            setSuccessApi("Profile has been updated")
        }catch(err){
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


    useEffect(()=>{
        if(userObj?.access){
            fetchUser()
        }
        
    }, [])

    return { fetchUser,account, updateUserProfile, updateUserAccount }
}

export default useFetchUpdateProfile