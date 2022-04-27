import React from 'react';
import Input from './Input';

const InputContainer = ({ handler, title, name, type }) => {
    return (
        <Input
            type={type}
            title={title}
            handler={handler}
            name={name} />
    );
};

export default InputContainer;