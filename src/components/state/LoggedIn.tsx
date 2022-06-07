import { useState } from "react";

const LoggedIn = () => {
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div> User is Logged {isLoggedIn ? "in" : "out"} </div>
        </div>
    );
}

export default LoggedIn;