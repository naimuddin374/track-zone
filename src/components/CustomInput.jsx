import PropTypes from 'prop-types';

const CustomInput = ({ type, name, label, classes, handleChange, value }) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                className={`form-control ${classes}`}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

CustomInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.string,
    value: PropTypes.string.isRequired,
}
CustomInput.defaultProps = {
    classes: '',
}
export default CustomInput;