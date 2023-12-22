import { useNavigate } from "react-router-dom";
import useAxios from "../../../api/useAxios";
import useGetAppContext from "../../../context/useGetAppContext";
import Cookies from 'js-cookie';
import { appUrls } from "../../urls";




const useLogout = () => {
    const api = useAxios()
    const { userObj, setUserObj } = useGetAppContext()
    const navigate = useNavigate()

    const logoutFunc = async () =>{

        try{
            const response = await api.post("api/token/blacklist/",{
                refresh: userObj?.refresh
            })
            Cookies.remove("access_token")
            Cookies.remove("refresh_token")
            setUserObj({})
            navigate(appUrls.home)

        }catch(err){
            console.log("err", err)
            console.log("userObj?.refresh: ", userObj?.refresh)
        }
    }

    return { logoutFunc }
}

export default useLogout