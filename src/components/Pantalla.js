import React from "react";
import  '../style-sheet/Pantalla.css';
// Otra forma para definir los componentes funcionales es declarando una constante y una funcion flecha...esta sintaxis la podemos usar para componentes que son mas sencillos...
// IMPORTANTE USAR LOS PARENTESIS EN VEZ DE LAS LLAVES PARA RETORNAR EL COMPONENENTE

const Pantalla = ({ input }) => (

    <div className="input">
       {input}
    </div>

);
export default Pantalla;