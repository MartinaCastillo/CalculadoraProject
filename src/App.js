import './App.css';
import calculadoraLogo from './imagenes/logo-calculadora.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
    setInput(evaluate(input));      
    } else {
      alert('Porfavor ingrese un valor primero.');
    }
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
        <Boton handleClic={calcularResultado}>=</Boton>
        <Boton handleClic={agregarInput}>0</Boton>
        <Boton handleClic={agregarInput}>.</Boton>
        <Boton handleClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear handleClear={() => setInput('')}>
          CLEAR
        </BotonClear>
      </div>
    </div>
    </div>
  );
}

export default App;
