
import PropTypes from "prop-types";

const SmallFontParagraph = ({text, textAlign}) => {
    return (
        <p className={`text-sm font-normal text-custom-gray-dark ${textAlign}`}>
            {text}
        </p>
    )
}


SmallFontParagraph.propTypes = {
    text : PropTypes.string.isRequired,
    textAlign : PropTypes.string,
}

export default SmallFontParagraph