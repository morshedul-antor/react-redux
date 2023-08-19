import { SET_USER, REMOVE_USER } from '../action/userAction'

export const initialState = {
    info: null,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                info: action.payload,
            }
        case REMOVE_USER:
            return {
                info: null,
            }
        default:
            return state
    }
}
