import React from 'react';
import InputSelectCountry from './InputSelectCountry';
import cities from '../../../stub/cities-stub.json';
import { filterSelectCities } from '../../../helpers/sortFilter';

const InputSelectCountryContainer = ({handler}) => {
    const filteredCities = filterSelectCities(cities);
    return (
        <InputSelectCountry title='Ваш город'
            cities={filteredCities}
            handler={handler} />
    );
};

export default InputSelectCountryContainer;