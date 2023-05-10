
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity={"London"}/>
      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/olena-azulay-365213262/" target="_blank"
              rel ="noopener noreferrer">Olena Azulay</a>  and is{" "}
      <a href="https://github.com/Olena911/react-home" target="_blank"
              rel ="noopener noreferrer">
open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
