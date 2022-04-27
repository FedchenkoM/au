import React, { useState } from 'react';
import './input.scss'

const Input = ({ handler, title, name, type }) => {
    let [isEmpty, setIsEmpty] = useState(false)
    const passwordsHandler = (e) => {
        setIsEmpty(e.target.value.length <= 0)
        handler(name, e.target.value)
    }
    const inputDiscriptions = {
        'password': 'Ваш новый пароль должен содержать не менее 5 символов.',
        'confirmPassword': 'Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.',
        'email': 'Можно изменить адрес, указанный при регистрации. '
    }
    return (
        <>
            <div className="inputs-password-container">

                <div className="input-container">
                    <span className="input__title">{title}</span>
                    <input
                        minLength={5}
                        type={type}
                        className={`input__list ${isEmpty ? 'with_errors' : ''}`}
                        onChange={(e) => passwordsHandler(e)} />
                </div>

                <div className="input__discription">
                    {inputDiscriptions[name]}
                </div>
            </div>
            <div className="error__messages">
                {isEmpty
                    ? 'Поле должно быть заполнено'
                    :
                    ''
                }
            </div>
        </>

    );
};
export default Input;