const CHANGE_STATUS_MESSAGE = 'CHANGE_STATUS_MESSAGE'
const GET_UNIVERSITIES_LIST = 'GET_UNIVERSITIES_LIST'

const defaultState = {
    status: 'Напиши свой статус',
    universities: []
}

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_STATUS_MESSAGE:
            return {
                ...state,
                status: action.payload.status
            }
        case GET_UNIVERSITIES_LIST:
            return {
                ...state,
                universities: action.payload.universities
            }
        default:
            return state
    }
}

export const changeStatusAC = (status) => {
    return {
        type: CHANGE_STATUS_MESSAGE,
        payload: {
            status
        }
    }
}

export const getUniversitiesListAC = (universities) => {
    return {
        type: GET_UNIVERSITIES_LIST,
        payload: {
            universities
        }
    }
}