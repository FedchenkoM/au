import React, { useEffect } from 'react';
import InputSelectUniversity from './InputSelectUniversity';
import { useSelector, useDispatch } from 'react-redux'
import { getUniversitiesList } from '../../../redux/actions/getUniversities.js';
import { uniqueUniversities } from '../../../helpers/sortFilter';

const InputSelectUniversityContainer = ({ handler }) => {
    const dispatch = useDispatch()
    let universitiesArr = useSelector(state => state.formReducer.universities)

    const universities = uniqueUniversities(universitiesArr)

    useEffect(() => {
        dispatch(getUniversitiesList())
    }, [])

    return (
        <InputSelectUniversity title='Университет'
            universities={universities}
            handler={handler} />
    );
};

export default InputSelectUniversityContainer;
