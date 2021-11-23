import { useState } from "react"

const ItemCount =({initial,stock}) => {
 console.log(initial,stock)
    const [contador, setContador]=useState(1)
    const incrementar = ()=>{
        if (contador>initial && contador < stock) {
            setContador(contador +1)
             } 
            }
            
const decrementar = ()=>{
    if (contador!==initial) {
            setContador(contador -1)
    } 
}
 
//  let fecha = new Date() 
// , ${fecha}`
 return (
     <>
    <h1>`El número es: ${contador}´  </h1>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        </>
    )
}

export default ItemCount;