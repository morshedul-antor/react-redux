import { createStore, combineReducers, applyMiddleware } from 'redux'
import localStorageMiddleware from '../middleware/localStorageMiddleware'
// import authReducer from '../reducer/authReducer'
import userReducer from '../reducer/userReducer'

const rootReducer = combineReducers({
    // auth: authReducer,
    user: userReducer,
})

// const authPersistedState = JSON.parse(localStorage.getItem('auth')) || {}
const userPersistedState = JSON.parse(localStorage.getItem('user'))

// const authLocalStorageMiddleware = localStorageMiddleware('auth')
const userLocalStorageMiddleware = localStorageMiddleware('user')

const defaultInitialState = {
    user: {
        info: null,
    },
    auth: {
        auth: null,
    },
}

const store = createStore(
    rootReducer,
    {
        // auth: { ...authPersistedState },
        user: userPersistedState !== null ? userPersistedState : defaultInitialState.user,
    },
    applyMiddleware(userLocalStorageMiddleware)
)

export default store
