import React from 'react'
import { useState, useEffect } from 'react'

function Juego() {
  const [maquina, setMaquina] = useState("");
  const [human, setHuman] = useState("");//Los useState están vacios porque no necesito que muestre un valor inicial o estático
  const [result, setResultado] = useState("")
  useEffect(() => {
    resultado(human);
  }, [maquina, human]);

  let opc = ['piedra', 'papel', 'tijera']//Creación de las opciones de la variable

  function juegoMaquina() {
    let randomMaquina = Math.round(Math.random() * 2)//Número aleatorio para lanzar piedra-papel o tijera

    setMaquina(opc[randomMaquina]) //Saca la opción aleatoria
  }
  
  function JuegoHuman(e) {
    //console.log(e.target.innerText)
    setHuman(e.target.innerText)//Target es fijar algo, se están enlazando los botones con el target y el innerText imprime el texto
    juegoMaquina()
    resultado(e.target.innerText)
  }
  function resultado(opcHuman) {
    if (opcHuman === maquina) {
      setResultado("Es empate")
    }
    else if (opcHuman === 'piedra' && maquina === 'tijera') {
      setResultado("Ganaste")
    }
    else if (opcHuman === 'papel' && maquina === 'piedra') {
      setResultado("Ganaste")
    }
    else if (opcHuman === 'tijera' && maquina === 'papel') {
      setResultado("Ganaste")
    }
    else {
      setResultado("Perdiste")
    }
  }
  
  return (
    <div className="App">
      <div>
        <p>Máquina</p>
        <h1>{maquina}</h1>
      </div>
      <hr />
      <div>
        <p>Human</p>
        <h1 style={{ color: 'green' }}>{human}</h1>
      </div>
      <div>
        <button onClick={JuegoHuman}>Piedra</button>
        <button onClick={JuegoHuman}>Papel</button>
        <button onClick={JuegoHuman}>Tijera</button>
      </div>
      <hr />
      <h1 style={{ color: 'pink' }}>{result}</h1>
    </div>
  )
}

export default Juego