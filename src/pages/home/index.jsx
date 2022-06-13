import React from 'react';
import CustomButton from "../../components/CustomButton";
import CreateForm from "./create-form";

const Home = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <CustomButton
                type={'button'}
                label={'Add New'}
                variant={'primary'}
                classes={'float-end'}
                clickHandler={() => setIsOpen(!isOpen)}
            />
            <CreateForm />
        </div>
    );
};
export default Home;