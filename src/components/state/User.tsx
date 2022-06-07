import { useState } from "react";

const User = () => {
    type AuthUser = {
        name:string,
        email:string
    }

    const [user, setUser] = useState<null|AuthUser>(null); 
   

    const handleLogin = () => {
        setUser({name:"John", email:"test"}); 
    }
    const handleLogout = () => {
        setUser(null);
    }

  
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>User name  {user?.name} </div>
            <div> User Email  {user?.email} </div>
          
        </div>
    );
}

export default User;