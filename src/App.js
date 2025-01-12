import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "milligram";


function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [movies, setMovies] = useState([]);

  function handleChange(event){
    setTitle(event.target.value)
  }
  function addMovie(event){
    if (title.length < 5){
      alert("Tytuł za krótki")
      return
    }
    console.log(title)
    setMovies([...movies, {title: title, year: year}])
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
      <h1>Moje ulubione filmy</h1>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
      </ul>
      <h5><b>Tytuł</b></h5>
      <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)}/>
      {title.length > 0 && <div>{message}</div>}
      <h5><b>Rok nagrania</b></h5>
      <input type="text" value={year} onChange={(event)=> setYear(event.target.value)}/>
      <button type='button' onClick={addMovie}> DODAJ FILM</button>
    </div>

  );
}

export default App;
