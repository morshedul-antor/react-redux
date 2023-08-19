// localStorageMiddleware.js
const localStorageMiddleware = (key) => (store) => (next) => (action) => {
    const result = next(action)
    localStorage.setItem(key, JSON.stringify(store.getState()))
    return result
}

export default localStorageMiddleware
