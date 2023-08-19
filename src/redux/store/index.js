import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLocalStorageMiddleware from '../middleware/localStorageMiddleware'
import authReducer from '../reducer/authReducer'
import themeReducer from '../reducer/themeReducer'
import userReducer from '../reducer/userReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    theme: themeReducer,
})

// get localStorage with key
const authPersistedState = JSON.parse(localStorage.getItem('auth'))
const userPersistedState = JSON.parse(localStorage.getItem('user'))
const themePersistedState = JSON.parse(localStorage.getItem('theme'))

// create localStorage with key
const authLocalStorageMiddleware = createLocalStorageMiddleware('auth')
const userLocalStorageMiddleware = createLocalStorageMiddleware('user')
const themeLocalStorageMiddleware = createLocalStorageMiddleware('theme')

// store all
const store = createStore(
    rootReducer,
    {
        auth: authPersistedState,
        user: userPersistedState,
        theme: themePersistedState,
    },
    // last one first fetch
    applyMiddleware(themeLocalStorageMiddleware, userLocalStorageMiddleware, authLocalStorageMiddleware)
)

// if local storage is cleared, reset state to initial state
if (authPersistedState === null) {
    store.dispatch({
        type: 'REMOVE_AUTH',
    })
}
if (userPersistedState === null) {
    store.dispatch({
        type: 'REMOVE_USER',
    })
}
if (themePersistedState === null) {
    store.dispatch({
        type: 'REMOVE_THEME',
    })
}

export default store
