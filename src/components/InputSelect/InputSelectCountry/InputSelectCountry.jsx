import React, { useState} from 'react';
import './inputSelectCountry.scss';

const InputSelectCountry = ({ cities, title, handler }) => {
    let [curCity, setCurCity] = useState()
    const handleChangeCity = (e) => {
        setCurCity(e.target.value)
        handler('cityName', e.target.value)
    }
    return (
        <div className="input-container">
            <span className="input__title">{title}</span>
            <select
                className="input__list"
                onChange={(e) => handleChangeCity(e)}>
                    <option></option>
                {cities.map((city) =>
                    <option 
                        className="input__list"
                        key={city.city}
                        value={city.city}>{city.city}</option>)}
            </select>

        </div>
    );
};

export default InputSelectCountry;