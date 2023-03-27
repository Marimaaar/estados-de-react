import React from 'react'
import { useState } from 'react'

function Estados() {
    const [nombre, setNombre] = useState('Manuel')
    function cambionombre() {
        setNombre('Mariana')
    }
    return (
        <div className="App">
            <h1>{nombre}</h1>
            <button onClick={cambionombre}>Cambiar nombre</button>
        </div>
    )
}

export default Estados