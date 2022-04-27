import React from 'react';
import InputCheckbox from './InputCheckbox';

const InputCheckboxContainer = ({ handler, title, name, type }) => {
    return (
        <InputCheckbox
            handler={handler}
            title={title}
            name={name}
            type={type}
        />
    );
};

export default InputCheckboxContainer;