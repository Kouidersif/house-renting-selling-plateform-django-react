import PropTypes from "prop-types"


const BaseParagraph = ({text}) => {
    return (
        <p className="text-base font-normal text-custom-gray-dark">
            {text}
        </p>
    )
}

BaseParagraph.propTypes = {
    text : PropTypes.string.isRequired
}

export default BaseParagraph