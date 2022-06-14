import { useState } from 'react';
import { objClearFromStorage, objDeepClone, objGetFromStorage, objSetToStorage } from '../utils/object-util';


const INIT_STATE = objGetFromStorage('trackZone') || {};



const useData = () => {
    const [state, setState] = useState(INIT_STATE);

    const handleCreate = (values) => {
        values.id = Object.keys(state).length;
        values.status = 1;
        const newState = {
            ...state,
            [values.id]: values
        }
        objSetToStorage('trackZone', newState)
        setState(newState)
    }

    const handleStatus = (id, status) => {
        const newState = objDeepClone(state);
        newState[id].status = status;
        objSetToStorage('trackZone', newState)
        setState(newState)
    }


    const handleUpdate = (id, values) => {
        const newState = {
            ...state,
            [id]: values
        }
        objSetToStorage('trackZone', newState)
        setState(newState)
    }


    const handleDelete = (id) => {
        const newState = objDeepClone(state);
        delete newState[id]
        objSetToStorage('trackZone', newState)
        setState(newState)
    }

    const handleClear = () => {
        objClearFromStorage('trackZone')
        setState({})
    };

    return {
        formData: state,
        handleClear,
        handleCreate,
        handleStatus,
        handleUpdate,
        handleDelete,
    };
};

export default useData;