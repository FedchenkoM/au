import React from 'react';
import './inputSelectUniversity.scss';

const InputSelectUniversity = ({ universities, title, handler }) => {
    const handleChangeUniversity = (e) => {
        handler('university', e.target.value)
    }
    return (
        <div className="input-container">
            <span className="input__title">{title}</span>
            <select className="input__list"
                onChange={(e) => handleChangeUniversity(e)}>
                <option></option>
                {universities.map((uni) =>
                    <option className="input__list"
                        key={uni}>{uni}</option>)}
            </select>
        </div>
    );
};

export default InputSelectUniversity;