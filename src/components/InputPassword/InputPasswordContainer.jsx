import React from 'react';
import InputPassword from './InputPassword';

const InputPasswordContainer = ({ handler, title, name, type }) => {
    return (
        <InputPassword
            type={type}
            title={title}
            handler={handler}
            name={name} />
    );
};

export default InputPasswordContainer;