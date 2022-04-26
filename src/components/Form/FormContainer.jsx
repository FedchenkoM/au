import React from 'react';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux'
import { changeStatus } from '../../redux/actions/changeStatus';

const FormContainer = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.formReducer.status)

    const handleChangeStatus = (textStatus) => {
        return dispatch(changeStatus(textStatus))
    }

    return (
        <Form status={status}
            handleChangeStatus={handleChangeStatus}
        />
    );
};

export default FormContainer;