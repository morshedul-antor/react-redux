const createLocalStorageMiddleware = (key) => (store) => (next) => (action) => {
    const result = next(action)
    localStorage.setItem(key, JSON.stringify(store.getState()[key.split(',')[0]]))
    return result
}

export default createLocalStorageMiddleware
