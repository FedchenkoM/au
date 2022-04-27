import React, { useState } from 'react';
import ButtonSubmit from './ButtonSubmit';
import { currentDateToString } from '../../helpers/dateHelper'

const ButtonSubmitContainer = ({ stateForm }) => {
    let [lastUpdate, setLastUpdate] = useState('')
    let [formValid, setFormValid] = useState()
    const handlerUpdate = () => {
        if (Object.values(stateForm).some(el => el === '')
            || stateForm.password !== stateForm.confirmPassword) {
                setFormValid(true)
                return
        } else {
        setLastUpdate(currentDateToString())
        setFormValid(false)
        console.log(JSON.stringify(stateForm))}
    }
    return (
        <>
            <ButtonSubmit
                formValid={formValid}
                lastUpdate={lastUpdate}
                handlerUpdate={handlerUpdate}
                stateForm={stateForm} />
            {formValid
                ? <div className="error__messages">Поля должны быть заполнены</div>
                : ''
            }
        </>
    );
};

export default ButtonSubmitContainer;