import React from 'react';
import Input from './Input';

const InputContainer = ({ handler, title, name, type, valid }) => {

    return (
        <>
            <Input
                type={type}
                title={title}
                handler={handler}
                name={name} />
            <div className="error__messages">
                {
                    type === 'email'
                        ? !valid
                            ? <span>Неверный email</span>
                            : ''
                        : ''
                }
                {
                    name === 'password'
                        ? !valid
                            ? <span>Используйте не менее 5 символов</span>
                            : ''
                        : ''

                }
                {
                    name === 'confirmPassword'
                        ? !valid
                            ? <span>Пароли не свопадают</span>
                            : ''
                        : ''

                }
            </div>
        </>
    );
};

export default InputContainer;