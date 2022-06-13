import PropTypes from 'prop-types';

const CustomButton = ({ type, label, variant, classes, clickHandler }) => {
    return (
        <button
            type={type}
            onClick={clickHandler}
            className={`btn btn-${variant} ${classes}`}
        >
            {label}
        </button>
    )
}

CustomButton.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    classes: PropTypes.string,
}
CustomButton.defaultProps = {
    type: 'button',
    classes: '',
}
export default CustomButton;