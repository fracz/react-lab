

export default function UserPanel({username, onLogout}) {
    return <div>
            <h4>Jesteś zalogowany jako {username}!</h4>
            <a onClick={() => onLogout()}>Wyloguj</a>
        </div>;
}