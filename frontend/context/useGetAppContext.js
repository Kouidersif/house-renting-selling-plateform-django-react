import { useContext } from "react";
import AppContext from "./useAppContext";

const useGetAppContext = () => {
    /*
        Custom hook to access the AppContext using useContext.
        This hook is used to retrieve the context values within components.
    */

    return useContext(AppContext)
}

export default useGetAppContext