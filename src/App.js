import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './redux/action/userAction'
import { setAuth, removeAuth } from './redux/reducer/authReducer'

function App() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [token, setToken] = useState('')

    const userState = useSelector((state) => state.user.info)
    const authToken = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()

    const data = {
        name: 'Antor',
        role: 'Admin',
        id: 1,
    }

    const handleSaveUser = () => {
        dispatch(setUser(data))
    }

    const handleSaveToken = () => {
        dispatch(setAuth(token))
    }

    const handleRemoveToken = () => {
        dispatch(removeAuth())
    }

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
            <div>
                <h2>Authentication</h2>
                <input type="text" placeholder="Token" value={token} onChange={(e) => setToken(e.target.value)} />
                <button onClick={handleSaveToken}>Save Token</button>
                <button onClick={handleRemoveToken}>Remove Token</button>
                {authToken && <p>Token: {authToken}</p>}
            </div>
        </div>
    )
}

export default App
