import PropTypes from "prop-types";

const Alerts = ({alert}) => {
    // Bg color
    const bgColor = alert === "Popular" ?  "bg-light-red" : alert === "New Listing" 
    ? "bg-light-blue" 
    : alert === "Discounted Price" ?  "bg-light-green"  : null
    // Color text
    const textColor = alert === "Popular" ?  "text-[#F11]" : alert === "New Listing" 
    ? "text-[#119BFF]" 
    : alert === "Discounted Price" ?  "text-[#00CE3A]"  : null


    return (
        <h5 className={`absolute bottom-4 left-6 flex gap-1 
        items-center px-3 py-1 rounded-2xl ${bgColor} ${textColor}`}>
            {
                alert === "Popular" ?  <i className="bi bi-fire"></i> : alert === "New Listing" 
                ? <i className="bi bi-house-door-fill"></i>  
                : alert === "Discounted Price" ?  <i className="bi bi-piggy-bank-fill"></i>  : null
            }
            {alert}</h5>
    )
}

Alerts.propTypes = {
    alert : PropTypes.string.isRequired,
}


export default Alerts