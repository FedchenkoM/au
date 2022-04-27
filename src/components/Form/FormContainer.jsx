import React, { useState } from 'react';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux'
import { changeStatus } from '../../redux/actions/changeStatus';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

const initialStateForm = {
    cityName: '',
    university: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmation: false,
}

const FormContainer = () => {
    let [stateForm, setStateForm] = useState(initialStateForm)
    const dispatch = useDispatch()
    const status = useSelector(state => state.formReducer.status)

    const handleChangeStatus = (textStatus) => {
        return dispatch(changeStatus(textStatus))
    }
    const handleFormChange = (input, value) => {
        let newState = { [input]: value }
        setStateForm(stateForm => ({
            ...stateForm,
            ...newState
        }))
    }
    return (
        <>
            <Form
                status={status}
                handleFormChange={handleFormChange}
                handleChangeStatus={handleChangeStatus} />
            <ButtonSubmit
                stateForm={stateForm} />
        </>

    );
};

export default FormContainer;