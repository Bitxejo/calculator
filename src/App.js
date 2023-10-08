import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
// Para mostrar en pantalla los numeros que marquemos usamos un hook el useState
import { useState } from 'react';
// Para hacer las operaciones matematicas importamos evaluate y mathjs , despues instalamos con npm install mathjs
import { evaluate } from 'mathjs';


function App() {
    //  Creamos un estado para ver lo el usuario ha ingresado...

    const [input, setInput ] = useState('');

    const agregarInput = val =>{
      setInput( input + val);
    };

    const calcularResultado = ( ) =>{
      if(input){
        setInput(evaluate(input));

      }else{
        alert('Ingresa numero para realizar operacion')
      }
     
     

    }



  return (
    <div className="App">
  <div className='freecodecamp-logo-contenedor'>
    
    <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo freecodecamp'></img>
  </div>
  <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
    <div className='fila'>
    <Boton manejarClic={agregarInput}>1</Boton>
    <Boton manejarClic={agregarInput}>2</Boton>
    <Boton manejarClic={agregarInput}>3</Boton>
    <Boton manejarClic={agregarInput}>+</Boton>
    </div>


    <div className='fila'>
    <Boton manejarClic={agregarInput}>4</Boton>
    <Boton manejarClic={agregarInput}>5</Boton>
    <Boton manejarClic={agregarInput}>6</Boton>
    <Boton manejarClic={agregarInput}>-</Boton>
    </div>

    <div className='fila'>
      <Boton manejarClic={agregarInput}>7</Boton>
      <Boton manejarClic={agregarInput}>8</Boton>
      <Boton manejarClic={agregarInput}>9</Boton>
      <Boton manejarClic={agregarInput}>*</Boton>
    </div>

    <div className='fila'>
      <Boton manejarClic={calcularResultado}>=</Boton>
      <Boton manejarClic={agregarInput}>0</Boton>
      <Boton manejarClic={agregarInput}>.</Boton>
      <Boton manejarClic={agregarInput}>/</Boton>
    </div>

    <div className='fila'>
      {/* definimos una funcion dentro del componente que volvera a limpiar la pantalla al estado original de cadena vacia  */}
      <BotonClear manejarClear={()=> setInput('')}>
        Clear
        </BotonClear>
    </div>

  </div>

 </div>
  );
}

export default App;
