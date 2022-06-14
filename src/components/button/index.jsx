import PropTypes from 'prop-types';

const Button = ({ type, label, variant, classes, clickHandler }) => {
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

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    classes: PropTypes.string,
}
Button.defaultProps = {
    type: 'button',
    classes: '',
    clickHandler: () => { }
}
export default Button;