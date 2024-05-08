import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(null);

    function login() {
        if (email) {
            setLoggedIn(email);
            setEmail('');
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
        content = <div>
            <label>Zaloguj się e-mailem</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button type="button" onClick={login}>Wchodzę</button>
        </div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
