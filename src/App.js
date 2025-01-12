import logo from './logo.svg';
import './App.css';

function App() {
  function handleChange(event){
    console.log(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange}/>
    </div>

  );
}

export default App;
