import { useState } from "react"
const ItemCount =({initial,stock})=>{
    
    const [numero,setNumero]=useState(0)
    const add=()=>{
        if (numero!==stock && numero<stock){
            setNumero(numero + 1)
        };
    }
    const substract=()=>{
     numero>0  &&  setNumero(numero-1);
       
    }
    return(
                <>
        <h1>El número es: ${numero}</h1>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
                </>
    )
}
export default ItemCount