import React from "react";


function Adivinador(props){

    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.limite) + 1);

    function comprobarNumero(evento){
         setNumeroUsuario(evento.target.value);
    }
    
    function comprobarNumeroMaquina(){
       if(numeroUsuario == numeroMaquina){
        alert("¡Adivinaste!");
       } else{
        alert("Fallaste, la respuesta era " + numeroMaquina);
       }
       setNumeroMaquina((Math.floor(Math.random() * props.limite) + 1));
    }

    return(
        <div>
            <p>Elige un número del 0 al 10</p>
            <p>¡Veremos si aciertas 😉 !</p>
              <input type="number" placeholder="ingresa tu apuesta" min={1} max={10} onChange={comprobarNumero}></input>
              <button onClick={comprobarNumeroMaquina}>Adivinar</button>
        </div>
      
    )
}



export default Adivinador;