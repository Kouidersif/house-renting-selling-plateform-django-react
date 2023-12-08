import PropTypes from 'prop-types';

const defaultValue = <i className="bi bi-arrow-right" />


const ButtonCircle = ({text=defaultValue, }) => {
  return (
    <button className="bg-primary text-white w-14 h-14 rounded-full text-2xl hover:bg-white hover:border-2 
    hover:border-primary hover:text-primary  ">
      {text}</button>
  )
}

ButtonCircle.propTypes = {
  text: PropTypes.string.isRequired
}

export default ButtonCircle