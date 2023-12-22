import { useEffect, useState } from "react"
import useAxios from "../../../api/useAxios";
import useGetAppContext from "../../../context/useGetAppContext";


const useFetchUpdateProfile = () => {

    const [ account, setAccount] = useState({});
    const api = useAxios()
    const { setFormsError, setErrorApi, decodedToken } = useGetAppContext()
    const { user_id, landlord_profile_id } = decodedToken

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
        try{
            setFormsError("")
            const response = await api.put(`api/landlord/retrieve/${landlord_profile_id}/`, formData);
            console.log(response?.data)
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
        fetchUser()
    }, [])

    return { fetchUser, account, updateUserProfile, updateUserAccount }
}

export default useFetchUpdateProfile