import './form.scss';
import React, { useState } from 'react'
import InputSelectCountryContainer from '../InputSelect/InputSelectCountry/InputSelectCountryContainer';
import InputSelectUniversityContainer from '../InputSelect/inputSelectUniversity/InputSelectUniversityContainer';
import InputContainer from '../Input/InputContainer';
import InputCheckboxContainer from '../InputCheckbox/InputCheckboxContainer';

const Form = (
  { status,
    handleChangeStatus,
    handleFormChange,
    emailValid,
    passwordValid,
    passwordConfirmValid
  }
) => {
  let [statusChanged, setStatusChanged] = useState(false)

  const handleSetStatus = () => {
    setStatusChanged(!statusChanged)
  }

  const handleSetStatusText = (e) => {
    setStatusChanged(!statusChanged)
    handleChangeStatus(e.target.value)
  }

  return (
    <div className="form">
      <div className="form__header">
        <span className="form__header_hello">Здравствуйте,&nbsp;</span>
        <div className="form__header__user-contaner">
          <div className="form__header__user">
            <span className="form__header__user_name"> Человек №3596941</span>
            <span className="form__header__change-status"
              onClick={handleSetStatus}>Сменить статус</span>
          </div>
          <div className="form__header__user_status">
            {!statusChanged
              ? <span>{status}</span>
              : <input
                type="text"
                defaultValue={status}
                autoFocus={true}
                onBlur={(e) => handleSetStatusText(e)}
              ></input>}
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div className="inputs-select-container">
        <InputSelectCountryContainer
          handler={handleFormChange} />
        <InputSelectUniversityContainer
          handler={handleFormChange} />
      </div>
      <InputContainer
        valid={passwordValid}
        type="password"
        handler={handleFormChange}
        title="Пароль"
        name="password" />
      <InputContainer
        valid={passwordConfirmValid}
        type="password"
        handler={handleFormChange}
        title="Подтвердите пароль"
        name="confirmPassword" />
      <InputContainer
        valid={emailValid}
        type="email"
        handler={handleFormChange}
        title="Электронная почта"
        name="email" />
      <InputCheckboxContainer
        type="checkbox"
        handler={handleFormChange}
        title="Я согласен"
        name="confirmation"
      />
    </div>
  )
}

export default Form;
