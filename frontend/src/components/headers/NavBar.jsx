import { useState } from "react";
import MobileNav from "./MobileNav";
import TopBar from "./TopBar";
import propTypes from "prop-types";
import { Link } from "react-router-dom";


const NavBar = ({urls}) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <>
        <TopBar />
        <header
            className="w-full h-20 bg-white mx-auto sticky top-0 z-50">
            {/* Desktop Version */}
            <div className="hidden lg:flex lg:w-[95%] xl:w-[80%] mx-auto h-full justify-between items-center">
                <ul className="flex items-center gap-8">
                    <li className="hover:text-primary cursor-pointer"><Link to={urls.home}>Home</Link></li>
                    <li className="hover:text-primary cursor-pointer"><a href="#about">About</a></li>
                    <li className="hover:text-primary cursor-pointer"><Link to={urls.listing}>Listings</Link></li>
                    <li className="hover:text-primary cursor-pointer"><a href="#services">Services</a></li>
                    <li className="hover:text-primary cursor-pointer"><Link to={""}>Blog</Link></li>
                </ul>
                {/* Logo */}
                <div>
                    <Link to={urls.home} className="flex items-center gap-2 cursor-pointer">
                    <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_2_3)">
                                <path
                                    d="M23.715 9.16499L12.465 0.164989C12.332 0.0584866 12.1667 0.000457764 11.9963 0.000457764C11.8258 0.000457764 11.6605 0.0584866 11.5275 0.164989L0.2775 9.16499C0.156135 9.26236 0.0680565 9.39506 0.025468 9.54471C-0.0171205 9.69436 -0.0121105 9.85356 0.0398037 10.0002C0.091718 10.1469 0.187966 10.2738 0.315214 10.3634C0.442461 10.4529 0.594407 10.5006 0.75 10.5H2.25V23.25C2.25 23.4489 2.32902 23.6397 2.46967 23.7803C2.61032 23.921 2.80109 24 3 24H18V22.5H15V15.75C15 15.5511 14.921 15.3603 14.7803 15.2197C14.6397 15.079 14.4489 15 14.25 15H9.75C9.55109 15 9.36032 15.079 9.21967 15.2197C9.07902 15.3603 9 15.5511 9 15.75V22.5H3.75V10.5H16.5V8.99999H2.8875L12 1.70999L21.1125 8.99999H21C20.8011 8.99999 20.6103 9.07901 20.4697 9.21966C20.329 9.36031 20.25 9.55108 20.25 9.74999V14.25H21.75V10.5H23.25C23.405 10.4991 23.5558 10.4502 23.6819 10.3601C23.8079 10.27 23.903 10.143 23.9539 9.9967C24.0049 9.85037 24.0093 9.69184 23.9665 9.54291C23.9237 9.39398 23.8359 9.26195 23.715 9.16499ZM10.5 16.5H13.5V22.5H10.5V16.5Z"
                                    fill="white"
                                />
                                <path
                                    d="M18.75 19.9425L17.7825 18.975L16.725 20.0325L18.225 21.5325C18.3655 21.6722 18.5556 21.7506 18.7537 21.7506C18.9519 21.7506 19.142 21.6722 19.2825 21.5325L23.7825 17.0325L22.725 15.975L18.75 19.9425Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_3">
                                    <rect width={24} height={24} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <span className="text-xl font-semibold">RealEstate</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link to={urls.login} className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5"
                                stroke="#2B2B2B"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.99999 9.99998C11.4912 9.99998 12.7 8.79119 12.7 7.29998C12.7 5.80881 11.4912 4.59998 9.99999 4.59998C8.50878 4.59998 7.29999 5.80881 7.29999 7.29998C7.29999 8.79119 8.50878 9.99998 9.99999 9.99998Z"
                                stroke="#2B2B2B"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                                stroke="#2B2B2B"
                                strokeWidth="1.6"
                            />
                        </svg>
                        Login</Link>
                        |
                    <Link to={urls.register}>Register</Link>
                    <Link to={urls.landlordHomePage} className="cursor-pointer px-6 rounded-full bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary py-3">
                                I{"'"}m a Landlord
                    </Link>
                </div>
            </div>
            {/* Mobile Version */}
            <MobileNav setShowMobileMenu={setShowMobileMenu}
                showMobileMenu={showMobileMenu} urls={urls} />

        </header>
        </>
    )
}


NavBar.propTypes = {
    urls : propTypes.object.isRequired,
}

export default NavBar;