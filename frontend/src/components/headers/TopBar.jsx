

const TopBar = () => {
    return (
        <div className="hidden md:block w-full bg-primary h-10">
            <div className="w-full h-full sm:w-[80%] sm:mx-auto flex justify-between items-center text-white">
            <address className="flex items-center gap-2 text-sm not-italic"><i className="bi bi-geo-alt"></i>Rezilla, 18 Grattan St, Brooklyn</address>
            <ul className="flex items-center gap-4 text-sm">
                <li className="flex items-center gap-2"><i className="bi bi-telephone"></i> +1 206-214-2298</li>
                <li className="flex items-center gap-2"><i className="bi bi-envelope"></i> email@realestate.com</li>
            </ul>
            </div>
        </div>
    )
}

export default TopBar