import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

function App() {
    const [authenticatedUsername, setAuthenticatedUsername] = useState(null);

    function login(email){
        if(email){
            setAuthenticatedUsername(email);
        }
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            {!authenticatedUsername && (
                <LoginForm onLogin={(email) => login(email)}/>
            )}
            {authenticatedUsername && (
                <div>
                    <h4>Jesteś zalogowany jako {authenticatedUsername}</h4>
                    <a onClick={() => setAuthenticatedUsername(null)}>Wyloguj</a>
                </div>
            )}
        </div>
    );
}

export default App;
