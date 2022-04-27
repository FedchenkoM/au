import React from 'react';
import './buttonSubmit.scss';

const ButtonSubmit = ({ lastUpdate, handlerUpdate }) => {
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