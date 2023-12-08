import Partners from "./components/Partners/Partners";
import BecomeAgent from "./components/agent/BecomeAgent";
import HighlightCities from "./components/cities/HighlightCities";
import AboutUs from "./components/about/AboutUs";
import HeroSection from "./components/hero/HeroSection";
import RecentListings from "./components/latest/RecentListings";
import Services from "./components/services/Services";


const Home = () => {

    return (
        <>
        <HeroSection />
        <Partners />
        <AboutUs />
        <RecentListings />
        <Services />
        <HighlightCities />
        <BecomeAgent />
        </>
    )
}

export default Home