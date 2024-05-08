import "milligram";
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";

function App() {
    const [loggedIn, setLoggedIn] = useState(null);

    function login(email) {
        if (email) {
            setLoggedIn(email);
        }
    }

    function logout() {
        setLoggedIn(false);
    }

    let content;
    if (loggedIn) {
        content = <div>
            <h2>Witaj {loggedIn}!</h2>
            <button onClick={logout}>Wyloguj</button>
        </div>
    } else {
        content = <LoginForm onLogin={login}/>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
