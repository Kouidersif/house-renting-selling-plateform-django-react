import { useEffect } from "react"
import useGetAppContext from "../../../context/useGetAppContext"



const APIAlert = () => {
    const { errorAPI, setErrorApi, successAPI, setSuccessApi } = useGetAppContext()

    useEffect(() => {
    const hideMessages = () => {
        setErrorApi('');
        setSuccessApi('');
    };

    if (errorAPI || successAPI) {
        // Set a timeout to hide the messages after 4 seconds
        const timeout = setTimeout(hideMessages, 4000);

        // Clear the timeout if either success or error messages change
        return () => clearTimeout(timeout);
    }
    }, [errorAPI, successAPI]);

    return (
        <div
            id="alert-border-1"
            className={`fixed right-4 z-30 items-center p-4 mb-4 text-white rounded-sm ${errorAPI ? "bg-red-800 flex" : successAPI ? "bg-green-800 flex" : "hidden"}`}
            role="alert"
        >
            <div className="ml-3 text-sm font-medium">
                {
                    successAPI ? successAPI : errorAPI ? errorAPI : ""
                }
            </div>
        </div>

    )
}

export default APIAlert