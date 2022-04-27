import React, { useState } from 'react';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/actions/changeStatus';
import ButtonSubmitContainer from '../ButtonSubmit/ButtonSubmitContainer';
import { emailValidator } from '../../helpers/validationFormHelper';

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
    let [emailValid, setEmailValid] = useState(true)
    let [passwordValid, setPasswordValid] = useState(true)
    let [passwordConfirmValid, setPasswordConfirmValid] = useState(true)

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
        if (input === 'email') {
            setEmailValid((emailValidator(value) !== null))
        } else if (input === 'password') {
            setPasswordValid(value.length >= 5)
        } else if (input === 'confirmPassword') {
            setPasswordConfirmValid(stateForm.password === value)
        } else {
            return
        }
    }
    return (
        <>
            <Form
                status={status}
                passwordValid={passwordValid}
                passwordConfirmValid={passwordConfirmValid}
                emailValid={emailValid}
                handleFormChange={handleFormChange}
                handleChangeStatus={handleChangeStatus} />
            <ButtonSubmitContainer
                stateForm={stateForm} />
        </>

    );
};

export default FormContainer;