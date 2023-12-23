import { useState } from "react"
import SideBar from "./components/SideBar"
import UserData from "./components/UserData"
import SavedListings from "./components/tenant/SavedListings";
import VisitRequests from "./components/tenant/VisitRequests";
import useFetchUpdateProfile from "../../hooks/profile/useFetchUpdateProfile";
import useLogout from "../../hooks/auth/useLogout";
import LandlordListing from "./components/landlord/LandlordListing";


const UserProfile = () => {
    const [ tab, setTab ] = useState("data");
    const { account, updateUserAccount, updateUserProfile } = useFetchUpdateProfile()
    const { logoutFunc } = useLogout()
    return (
        <div className="w-[95%] xl:w-[80%] mx-auto flex gap-2 min-h-screen">
            <SideBar setTab={setTab} logoutFunc={logoutFunc} />
            {/* Right side */}
            <div className="flex-1 px-4 py-8">
            {
                tab === "data" ? <UserData account={account} updateUserAccount={updateUserAccount} updateUserProfile={updateUserProfile} /> : 
                tab === "saved-listings" ? <SavedListings /> : 
                tab === "visit-requests" ? <VisitRequests /> : 
                tab === "posted-listings" ? <LandlordListing /> : 
                null
                
            }
            </div>
            
        </div>
    )
}

export default UserProfile