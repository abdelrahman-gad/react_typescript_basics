import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        console.log('handleLogin');
        if (userContext) {
            userContext.setUser({ name: "John", email: "john@gmail.com" });
        }
    }


    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null);
        }
    }

    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>User email is {userContext?.user?.name} </div>
            <div>User name is {userContext?.user?.email} </div>
        </div>
    );
}