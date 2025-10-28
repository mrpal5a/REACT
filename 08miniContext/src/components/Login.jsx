import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //using useContext, it is similar to the useState in use
    const {setUser} = useContext(UserContext) // here the setUser is coming from UserContextProvider.jsx file, that we had passed as prop

    //here we are sending the data to profile.jsx file
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input placeholder="username" type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="password" type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit} > Submit</button>
        </div>
    )
}

export default Login;