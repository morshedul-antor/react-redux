const SET_THEME = 'SET_THEME'
const REMOVE_THEME = 'REMOVE_THEME'

export function setTheme(theme) {
    return {
        type: SET_THEME,
        payload: theme,
    }
}

export function removeTheme() {
    return {
        type: REMOVE_THEME,
    }
}

export const initialState = {
    theme: 'white',
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        case REMOVE_THEME:
            return {
                theme: 'white',
            }
        default:
            return state
    }
}
