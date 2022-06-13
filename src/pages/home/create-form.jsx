import CustomInput from "../../components/CustomInput";
import useForm from '../../hooks/useForm';


const INIT_STATE = {
    name: '',
    email: '',
}

const CreateForm = () => {

    const { handleChange, formState } = useForm({ init: INIT_STATE, validate: false })

    return (
        <div>
            <form>
                <CustomInput
                    type={'text'}
                    label={'Enter Name'}
                    name={'name'}
                    value={formState.name.value}
                    handleChange={handleChange}
                />
                <CustomInput
                    type={'email'}
                    label={'Enter Email'}
                    name={'email'}
                    value={formState.email.value}
                    handleChange={handleChange}
                />
            </form>
        </div>
    )
};
export default CreateForm;