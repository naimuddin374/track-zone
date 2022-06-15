import React from 'react';
import Button from "../../components/button";
import useData from '../../hooks/useData';
import { isObjEmpty } from '../../utils/object-util';
import Form from "./form";
import List from './list';

const Dashboard = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [editData, setEditData] = React.useState({});

    const { formData, handleClear, handleCreate, handleUpdate, handleDelete, handleStatus } = useData();

    const toggle = (obj = {}) => {
        setEditData(obj);
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <Button
                type={'button'}
                label={isOpen ? 'Cancel' : 'Add New'}
                variant={'dark'}
                classes={'float-end'}
                clickHandler={toggle}
            />
            {!isObjEmpty(formData) &&
                <Button
                    type={'button'}
                    label={'Clear'}
                    variant={'danger'}
                    classes={'float-end me-3'}
                    clickHandler={() => handleClear()}
                />}
            {isOpen ? <Form
                handleCreate={handleCreate}
                handleUpdate={handleUpdate}
                toggle={toggle}
                data={editData}
            /> : <List
                toggle={toggle}
                data={formData}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
            />}
        </div>
    );
};
export default Dashboard;

/*
let d = new Date();    
d = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
let yyyymmdd = t.toISOString().slice(0, 10); 
*/