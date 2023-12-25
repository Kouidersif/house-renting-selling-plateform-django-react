import { useLocation, Navigate, Outlet } from "react-router-dom";
import useGetAppContext from "../../context/useGetAppContext";
import {appUrls} from "../urls"



export const RequireAuth = () => {
    const { userObj } = useGetAppContext()
    const location = useLocation()
    return (
        userObj?.access ? <Outlet /> : <Navigate to={appUrls.login} state={{ from: location }} replace  /> 
    );
}


export const NonAuthenticatedOrRedirect = () => {
    const { userObj } = useGetAppContext()
    const location = useLocation()
    return (
        !userObj?.access ? <Outlet /> : <Navigate to={appUrls.home} state={{ from: location }} replace  /> 
    );
}

