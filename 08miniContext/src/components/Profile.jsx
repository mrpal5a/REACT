import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile(){
    //here we are receiving the data from Login.jsx
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    return(
        <>
        <h3>Welcome {user.username}</h3>
        </>
    )
}

export default Profile;