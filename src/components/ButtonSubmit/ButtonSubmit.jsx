import React, { useState } from 'react';
import './buttonSubmit.scss';
import { currentDateToString } from '../../helpers/dateHelper'

const ButtonSubmit = ({ stateForm }) => {
    let [lastUpdate, setLastUpdate] = useState('')
    const handlerUpdate = () => {
        setLastUpdate(currentDateToString())
        console.log(JSON.stringify(stateForm));
    }
    return (
        <div className="submit-container">
            <input
                type="button"
                defaultValue="Изменить"
                onClick={handlerUpdate}
            />
            <div className="submit__date">
                {lastUpdate
                    ? `последние изменения ${lastUpdate}`
                    : ''}
            </div>
        </div>
    );
};

export default ButtonSubmit;