import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
    const [email, setEmail] = useState('szulinska@agh.edu.pl');

    let message;

    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 15) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    function showAlert(){
        alert(email);
    }

    function logIn() {
        let idLogIn = document.getElementById("divLogIn");
        let idLogOut = document.getElementById("divLogOut");

        let logowanie = document.getElementById("logowanie").value;

        if(logowanie === null || logowanie === ""){
            alert("Aby się zalogować musisz podać twój e-mail!")
        }else{
            idLogIn.style.display = "none";
            idLogOut.style.display = "block";
        }

    }
    function logOut(){
        let idLogIn = document.getElementById("divLogIn");
        let idLogOut = document.getElementById("divLogOut");
        let logowanie = document.getElementById("logowanie");

        idLogIn.style.display = "block";
        idLogOut.style.display = "none";
        logowanie.value = "";
    }
    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            <div id={"divLogIn"}>
                <label htmlFor={"logowanie"}>Zaloguj się e-mailem  </label>
                <input id={"logowanie"} type="text" onChange={handleChange}/>
                <button type="button" onClick={logIn}>Wchodzę</button>
            </div>
            <div id={"divLogOut"} style={{display: "none"}}>
                <h2>Witaj {email}!</h2>
                <p onClick={logOut} style={{color: "blue"}}>Wyloguj</p>
            </div>
        </div>
    );
}

export default App;
