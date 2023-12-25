import { Route, Routes, useLocation } from "react-router-dom"
import {
  Home, Login, Register,
  Listings, ListingView, LandLordHome, UserProfile, CreateListing
} from "./routes/exporter"
import { NavBar } from "./components/exporter"
import Footer from "./components/footer/Footer"
import { appUrls } from "./urls"
import APIAlert from "./utils/notifications/APIAlert"
import { NonAuthenticatedOrRedirect, RequireAuth } from "./permission/RequireAuth"



function App() {
  const location = useLocation();
  const hideNavBarRoutes = [appUrls.register, appUrls.login, appUrls.createListing]; // Specify the routes where the navbar should be hidden
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);


  return (
    <>
      {
        !shouldHideNavBar && <NavBar urls={appUrls} />
      }
      <APIAlert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/view/:id" element={<ListingView />} />
        {/* Landlord */}
        <Route path={appUrls.landlordHomePage} element={<LandLordHome />} />
        
        <Route element={<NonAuthenticatedOrRedirect />}>
          <Route path="/register" element={<Register urls={appUrls} />} />
          <Route path="/login" element={<Login urls={appUrls} />} />
        </Route>

        <Route element={<RequireAuth />}>
          {/* Profile */}
          <Route path={appUrls.userProfile} element={<UserProfile />} />
          {/*  */}
          <Route path={appUrls.createListing} element={<CreateListing />} />
        </Route>
      </Routes>
      {
        !shouldHideNavBar && <Footer />
      }


    </>
  )
}

export default App
