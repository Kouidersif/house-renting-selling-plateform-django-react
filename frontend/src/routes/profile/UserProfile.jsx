import { useState } from "react"
import SideBar from "./components/SideBar"
import UserData from "./components/UserData"
import SavedListings from "./components/SavedListings";
import VisitRequests from "./components/VisitRequests";


const UserProfile = () => {
    const [ tab, setTab ] = useState("data");
    return (
        <div className="w-[95%] xl:w-[80%] mx-auto flex gap-2 min-h-screen">
            <SideBar setTab={setTab} />
            {/* Right side */}
            <div className="flex-1 px-4 py-8">
            {
                tab === "data" ? <UserData /> : 
                tab === "saved-listings" ? <SavedListings /> : 
                tab === "visit-requests" ? <VisitRequests /> : null
                
            }
            </div>
            
        </div>
    )
}

export default UserProfile