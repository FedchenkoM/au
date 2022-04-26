import './form.scss';
import React, { useState, useEffect } from 'react'
import InputSelectCountryContainer from '../InputSelect/InputSelectCountry/InputSelectCountryContainer';
import InputSelectUniversityContainer from '../InputSelect/inputSelectUniversity/InputSelectUniversityContainer';

const Form = ({ status, handleChangeStatus }) => {
  const initialStateForm = {
    cityName: '',
    university: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmation: false,
  }
  let [stateForm, setStateForm] = useState(initialStateForm)
  let [statusChanged, setStatusChanged] = useState(false)

  const handleSetStatus = () => {
    setStatusChanged(!statusChanged)
  }

  const handleSetStatusText = (e) => {
    setStatusChanged(!statusChanged)
    handleChangeStatus(e.target.value)
  }

  const handleFormChange = (input, value) => {
    let newState = { [input]: value }

    setStateForm(stateForm => ({
      ...stateForm,
      ...newState
    }))
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
              : <input type="text"
                defaultValue={status}
                autoFocus={true}
                onBlur={(e) => handleSetStatusText(e)}
              ></input>}
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div className="inputs-select-container">
        <InputSelectCountryContainer handler={handleFormChange} />
        <InputSelectUniversityContainer handler={handleFormChange} />
      </div>
    </div>
  )
}

export default Form;
