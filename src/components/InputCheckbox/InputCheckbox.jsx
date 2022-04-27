import React from 'react';
import './inputCheckbox.scss';

const InputCheckbox = ({ handler, title, name, type }) => {
    const checkboxHandler = (e) => {
        handler(name, e.target.checked);
    }
    return (
        <>
            <div className="input-container checkbox">
                <span className="input__title">{title}</span>
                <input
                    type={type}
                    onChange={(e) => checkboxHandler(e)} />
            <div className="input__discription">
                принимать актуальную информацию
            </div>
            </div>
        </>
    );
};

export default InputCheckbox;