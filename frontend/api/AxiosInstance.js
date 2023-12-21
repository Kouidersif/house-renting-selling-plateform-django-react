import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL


export const axiosInstancePublic = axios.create({
    baseURL,
    
})  
const axiosInstancePrivate = axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    }
})  


export default axiosInstancePrivate