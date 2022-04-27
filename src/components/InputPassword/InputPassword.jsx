import React from 'react';
import './inputPassword.scss'

const InputPassword = ({ handler, title, name, type }) => {
    const passwordsHandler = (e) => {
        handler(name, e.target.value)
    }
    const inputDiscriptions = {
        'password': 'Ваш новый пароль должен содержать не менее 5 символов.',
        'confirmPassword': 'Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.',
        'email': 'Можно изменить адрес, указанный при регистрации. '
    }
    return (
        <div className="inputs-password-container">

            <div className="input-container">
                <span className="input__title">{title}</span>
                <input
                    type={type}
                    className="input__list"
                    onChange={(e) => passwordsHandler(e)} />
            </div>

            <div className="input__discription">
                {inputDiscriptions[name]}
            </div>
        </div>

    );
};
export default InputPassword;