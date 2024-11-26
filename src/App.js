import React from "react";
import './App.css';
import Titulo from "./components/Titulo";
import Adivinador from "./components/Adivinador";


function App() {
  return(
    <div className='App'>
    <Titulo/>
    <Adivinador limite='10'/>
  </div>
  );
  
}

export default App;
