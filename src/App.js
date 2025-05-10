import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('szulinska@agh.edu.pl');
    const [authenticatedUsername, setAuthenticatedUsername] = useState(null);
    let message;

    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 15) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            {!authenticatedUsername && (
                <div id={"divLogIn"}>
                    <label htmlFor={"logowanie"}>Zaloguj się e-mailem  </label>
                    <input type="text" onChange={handleChange}/>
                    <button type="button" onClick={() => setAuthenticatedUsername(email)}>Wchodzę</button>
                </div>
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
