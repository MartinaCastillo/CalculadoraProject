import './App.css';
import calculadoraLogo from './imagenes/logo-calculadora.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };


  return (
    <div className='App'>
    <div className='logo-contenedor'>
      <img
      src={calculadoraLogo}
      className='logo'
      alt='Logo'/>
    </div>
    <div className='contenedor-calculadora'>
      <Pantalla input={input} />
      <div className='fila'>
        <Boton handleClic={agregarInput}>1</Boton>
        <Boton handleClic={agregarInput}>2</Boton>
        <Boton handleClic={agregarInput}>3</Boton>
        <Boton handleClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton handleClic={agregarInput}>4</Boton>
        <Boton handleClic={agregarInput}>5</Boton>
        <Boton handleClic={agregarInput}>6</Boton>
        <Boton handleClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton handleClic={agregarInput}>7</Boton>
        <Boton handleClic={agregarInput}>8</Boton>
        <Boton handleClic={agregarInput}>9</Boton>
        <Boton handleClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton handleClic={agregarInput}>=</Boton>
        <Boton handleClic={agregarInput}>0</Boton>
        <Boton handleClic={agregarInput}>.</Boton>
        <Boton handleClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear>CLEAR</BotonClear>
      </div>
    </div>
    </div>
  );
}

export default App;
