import React from "react";
import Button from "../../components/button";
import CustomInput from "../../components/form/custom-input";
import useForm from '../../hooks/useForm';
import PropTypes from 'prop-types';
import { isObjEmpty } from "../../utils/object-util";



const INIT_STATE = {
    name: '',
    datetime: '',
}


const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is Required!';
    }

    if (!values.datetime) {
        errors.datetime = 'Datetime is Required!';
    }

    return errors;
};


const Form = ({ handleCreate, handleUpdate, toggle, data }) => {

    const getInitValue = () => {
        if (!isObjEmpty(data)) {
            return {
                name: data.name,
                datetime: data.datetime,
            }
        }
        return INIT_STATE;
    }

    const { handleChange, formState, handleSubmit, handleBlur, handleFocus, clear } = useForm({ init: getInitValue(), validate })


    const handleSubmitCB = ({ hasError, values, errors }) => {
        if (hasError) {
            alert('[VALIDATION ERROR]' + JSON.stringify(errors));
        } else {
            if (data.name) {
                values.status = data.status;
                values.id = data.id;
                handleUpdate(data.id, values)
                alert('Data has been updated!');
            } else {
                handleCreate(values);
                alert('Data has been created!');
            }
            clear();
            toggle();
        }
    };


    return (
        <div className="pt-5">
            <h4>Create New Clock</h4>
            <form onSubmit={e => handleSubmit(e, handleSubmitCB)}>
                <CustomInput
                    type={'text'}
                    label={'Enter Name'}
                    name={'name'}
                    value={formState.name.value || ''}
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
                <CustomInput
                    type={'datetime-local'}
                    label={'Select Date & Time'}
                    name={'datetime'}
                    value={formState.datetime.value}
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
                <Button
                    type={'submit'}
                    label={'Submit'}
                    variant={'primary'}
                />
            </form>
        </div>
    )
};
Form.propTypes = {
    data: PropTypes.object,
    handleCreate: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
}
Form.defaultProps = {
    data: {}
}
export default Form;