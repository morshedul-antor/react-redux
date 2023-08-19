import { SET_USER } from '../action/userAction'

const initialState = {
    info: null,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                info: action.payload,
            }
        default:
            return state
    }
}
