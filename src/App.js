import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { setAuth, getAuth, removeAuth } from './redux/reducer/authReducer'
import { setUser } from './redux/action/userAction'

function App() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    // const [token, setToken] = useState('')

    const userState = useSelector((state) => state.user.info)
    // const authToken = useSelector((state) => state.auth.auth)
    const dispatch = useDispatch()

    const handleSaveUser = () => {
        dispatch(setUser({ name, id }))
    }

    // const handleSaveToken = () => {
    //     dispatch(setAuth(token))
    // }

    // const handleGetToken = () => {
    //     dispatch(getAuth())
    // }

    // const handleRemoveToken = () => {
    //     dispatch(removeAuth())
    // }

    return (
        <div className="App">
            <h1>Redux Local Storage Example</h1>
            <div>
                <h2>User Details</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                <button onClick={handleSaveUser}>Save User</button>
                {userState && (
                    <div>
                        <p>Name: {userState.name}</p>
                        <p>ID: {userState.id}</p>
                    </div>
                )}
            </div>
            {/* <div>
                <h2>Authentication</h2>
                <input type="text" placeholder="Token" value={token} onChange={(e) => setToken(e.target.value)} />
                <button onClick={handleSaveToken}>Save Token</button>
                <button onClick={handleGetToken}>Get Token</button>
                <button onClick={handleRemoveToken}>Remove Token</button>
                {authToken && <p>Token: {authToken}</p>}
            </div> */}
        </div>
    )
}

export default App
