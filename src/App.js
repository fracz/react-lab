import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const [authenticatedUsername, setAuthenticatedUsername] = useState(null);

    function login(email){
        if(email){
            setAuthenticatedUsername(email);
        }
    }

    function logout(){
        setAuthenticatedUsername(null);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                authenticatedUsername
                    ? <UserPanel username={authenticatedUsername} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
