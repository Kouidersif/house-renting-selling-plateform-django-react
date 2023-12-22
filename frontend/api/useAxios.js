import axiosInstancePrivate, { axiosInstancePublic } from "./AxiosInstance";
import useGetContext from "../context/useGetAppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { appUrls } from "../src/urls";





const useAxios = () => {
    const { setErrorApi, setUserObj, userObj } = useGetContext()
    // const accessToken = Cookies.get("access_token") || null;
    const navigate = useNavigate()
    axiosInstancePrivate.interceptors.request.use(
        (config) => {
            if (userObj?.access) {
                config.headers.Authorization = `JWT ${userObj?.access}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstancePrivate.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            // If the error status is 401 and there is no originalRequest._retry flag,
            // it means the token has expired and we need to refresh it
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {

                    const response = await axiosInstancePublic.post(`api/token/refresh/`, { refresh:userObj?.refresh });
                    const data = response?.data
                    // Set token to cookies
                    Cookies.set('access_token', data?.access, { secure: true, sameSite: 'strict' });
                    // Set user object
                    setUserObj({
                        ...userObj,
                        access: data?.access,
                        refresh: data?.refresh
                    })
                    // Retry the original request with the new token
                    originalRequest.headers.Authorization = `JWT ${data?.access}`;
                    return axios(originalRequest);
                } catch (error) {
                    // Handle refresh token error or redirect to login
                    setErrorApi("Authentication failed, you will be redirected to login");
                    Cookies.remove("access_token")
                    Cookies.remove("refresh_token")
                    setUserObj({
                        access:"",
                        refresh:"",
                    })
                    navigate(appUrls.login)

                }
            }

            return Promise.reject(error);
        }
    );




    return axiosInstancePrivate;
}


export default useAxios;

