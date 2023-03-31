import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [move, setMove] = useState("stop")
  console.log(move)

  const handleMove = () => {
    if (move === "stop") {
      setMove("spin")
    }
    else {
      setMove("stop")
    }  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className={`App-logo-${move}`}/>
        <button className="spin-button" onClick={handleMove}>SPIN</button>
      </header>
    </div>
  );
}

export default App;
