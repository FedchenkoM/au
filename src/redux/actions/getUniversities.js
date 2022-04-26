import { getUniversitiesListAC } from '../formReducer';
import axios from 'axios'

export const getUniversitiesList = () => {
    return async function (dispatch) {
        const universities = await axios.get('http://universities.hipolabs.com/search?country=United+Kingdom')
        return dispatch(getUniversitiesListAC(universities.data));
    }
}