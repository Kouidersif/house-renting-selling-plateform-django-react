import { createContext, useState } from "react";
import propTypes from "prop-types";

const AppContext = createContext({});



export const ContextAppProvider = ({children})=>{

    const [ userObj, setUserObj ] = useState({})
    const [ errorAPI, setErrorApi ] = useState("");
    const [ successAPI, setSuccessApi ] = useState("");
    

    return (
        <AppContext.Provider value={{
            userObj, setUserObj, setErrorApi, errorAPI, successAPI, setSuccessApi
        }}>
            {children}
        </AppContext.Provider>
    )
}

ContextAppProvider.propTypes = {
    children: propTypes.any
}


export default AppContext;