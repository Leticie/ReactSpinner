import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [move, setMove] = useState("stop")

  const handleButtonHold = () => setMove("spin")
  const handleButtonRelease = () => setMove("stop")
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className={`App-logo-${move}`}/>
        <button id="button" className="spin-button" onMouseDown={handleButtonHold} onMouseUp={handleButtonRelease}>SPIN</button>
      </header>
    </div>
  );
}

export default App;
