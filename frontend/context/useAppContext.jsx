import { createContext, useState } from "react";
import propTypes from "prop-types";
import Cookies from "js-cookie";
import { decodeJwt } from 'jose';


const AppContext = createContext({});

const accessToken = Cookies.get("access_token") || null;
const refreshToken = Cookies.get("refresh_token") || null;

export const ContextAppProvider = ({children})=>{
    let decodedToken;
    // Decode token
    if (accessToken){
        decodedToken = decodeJwt(accessToken)
    }

    const [ userObj, setUserObj ] = useState({
        access:accessToken,
        refresh:refreshToken
    })
    const [ errorAPI, setErrorApi ] = useState("");
    const [ successAPI, setSuccessApi ] = useState("");
    const [ formsError , setFormsError ] = useState(null);


    return (
        <AppContext.Provider value={{
            userObj, setUserObj, setErrorApi, 
            errorAPI, successAPI, setSuccessApi, decodedToken, setFormsError,
            formsError
        }}>
            {children}
        </AppContext.Provider>
    )
}

ContextAppProvider.propTypes = {
    children: propTypes.any
}


export default AppContext;