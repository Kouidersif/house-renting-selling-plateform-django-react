import propTypes from "prop-types";

const SideBar = ({setTab, logoutFunc}) => {


    return (
        <>
            <aside
                className="hidden md:block w-64 min-h-full "
            >
                <div className="overflow-y-auto py-5  h-full  border-gray-200">
                    <ul className="space-y-2">
                        <li>
                            <button  onClick={()=> setTab("data")}
                                className="w-full flex items-center px-2 py-4 border-b-2 text-lg font-normal text-gray-900  hover:bg-gray-100 group"
                            >
                                <i className="bi bi-person-fill text-xl text-electric"></i>
                                <span className="ml-3">Profile</span>
                            </button>
                        </li>
                        <li>
                            <button  onClick={()=> setTab("saved-listings")}
                                className="w-full flex items-center px-2 py-4 border-b-2 text-lg font-normal text-gray-900  hover:bg-gray-100 group"
                            >
                                <i className="bi bi-bookmark-check-fill text-xl text-electric"></i>
                                <span className="ml-3">Saved bookings</span>
                            </button>
                        </li>
                        <li>
                            <button  onClick={()=> setTab("visit-requests")}
                                className="w-full flex items-center px-2 py-4 border-b-2 text-lg font-normal text-gray-900  hover:bg-gray-100 group"
                            >
                                <i className="bi bi-house-check-fill text-xl text-electric"></i>
                                <span className="ml-3">Visit requests</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={logoutFunc}
                                className="w-full flex items-center px-2 py-4 text-lg font-normal text-gray-900  hover:bg-gray-100 group"
                            >
                                <i className="bi bi-box-arrow-left text-xl text-red-500"></i>
                                <span className="ml-3">Log out</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
        </>

    )
}

SideBar.propTypes = {
    setTab : propTypes.func.isRequired,
    logoutFunc : propTypes.func.isRequired,
}

export default SideBar