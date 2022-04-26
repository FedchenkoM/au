import React, { useState } from 'react';
import './inputSelectUniversity.scss';

const InputSelectUniversity = ({ universities, title, handler }) => {
    let [curUniversity, setCurUniversity] = useState()
    const handleChangeUniversity = (e) => {
        setCurUniversity(e.target.value)
        handler('university', curUniversity)
    }
    return (
        <div className="input-container">
            <span className="input__title">{title}</span>
            <select className="input__list"
                onChange={(e) => handleChangeUniversity(e)}>
                {universities.map((uni) =>
                    <option className="input__list"
                        key={uni}>{uni}</option>)}
            </select>

        </div>
    );
};

export default InputSelectUniversity;