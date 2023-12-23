import { Route, Routes, useLocation } from "react-router-dom"
import { Home, Login, Register, 
  Listings, ListingView, LandLordHome, UserProfile, CreateListing } from "./routes/exporter"
import { NavBar} from "./components/exporter"
import Footer from "./components/footer/Footer"
import { appUrls } from "./urls"
import APIAlert from "./utils/notifications/APIAlert"



function App() {
  const location = useLocation();
  const hideNavBarRoutes = [ appUrls.register, appUrls.login, appUrls.createListing]; // Specify the routes where the navbar should be hidden
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);


  return (
    <>
    {
      !shouldHideNavBar && <NavBar urls={appUrls} />
    }
    <APIAlert />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register urls={appUrls}  />} />
      <Route path="/login" element={<Login urls={appUrls} />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listing/view/:id" element={<ListingView />} />
      {/* Landlord */}
      <Route path={appUrls.landlordHomePage} element={<LandLordHome />} />

      {/* Profile */}
      <Route path={appUrls.userProfile} element={<UserProfile />} />
      {/*  */}
      <Route path={appUrls.createListing} element={<CreateListing />} />
    </Routes>
    {
      !shouldHideNavBar && <Footer />
    }
      
      
    </>
  )
}

export default App
