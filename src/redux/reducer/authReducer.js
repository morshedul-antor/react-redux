const SET_AUTH = 'SET_AUTH'
const REMOVE_AUTH = 'REMOVE_AUTH'

export function setAuth(auth) {
    return {
        type: SET_AUTH,
        payload: auth,
    }
}

export function removeAuth() {
    return {
        type: REMOVE_AUTH,
    }
}

export const initialState = {
    auth: false,
    token: '',
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: true,
                token: action.payload,
            }
        case REMOVE_AUTH:
            return {
                auth: false,
                token: '',
            }
        default:
            return state
    }
}
