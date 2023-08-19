const SET_AUTH = 'SET_AUTH'
const GET_AUTH = 'GET_AUTH'
const REMOVE_AUTH = 'REMOVE_AUTH'

export function setAuth(token) {
    return {
        type: SET_AUTH,
        payload: { auth: false, token: token },
    }
}

export function getAuth() {
    return {
        type: GET_AUTH,
    }
}

export function removeAuth() {
    return {
        type: REMOVE_AUTH,
    }
}

const initialState = {
    auth: { auth: false, token: '' },
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: action.payload,
            }
        case GET_AUTH:
            return {
                ...state,
            }
        case REMOVE_AUTH:
            return {
                ...state,
                auth: { auth: false, token: '' },
            }
        default:
            return state
    }
}
