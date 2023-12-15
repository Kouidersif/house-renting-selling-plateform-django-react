import PropTypes from 'prop-types';

const defaultText = "Add Listing"


const ButtonRadius = ({text=defaultText, styleClass, handleButtonClick}) => {
    return (
        <button className={`cursor-pointer px-6 rounded-full ${styleClass}`}
        onClick={handleButtonClick}>
            {text === "Search" && <i className='bi bi-search mr-3'></i>}
            {text}
            </button>
    )
}


ButtonRadius.propTypes = {
    text: PropTypes.string.isRequired,
    styleClass: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
}


export default ButtonRadius