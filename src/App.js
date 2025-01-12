import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [title, setTitle] = useState('Walle-E');

  function handleChange(event){
    setTitle(event.target.value)
  }

  let message;
  if (title.length < 5) {
      message = "Tutuł jest za krótki. Nagrywają takie filmy?";
  } else if (title.length < 15) {
      message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
  } 
  else {
      message = "Tytuł jest za długi, nikt tego nie zapamięta.";
  }

  
  return (
    <div>
      <h1>My favorite movie {title}</h1>
      {title.length > 0 && <div>{message}</div>}
      <input type="text" value={title} onChange={handleChange}/>
      <button type='button' onClick={() => alert(title)}> Pokaż tutuł filmu </button>
    </div>

  );
}

export default App;
