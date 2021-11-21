import { Fragment, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login'
import Input from './components/Input/Input.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

const productos =[
    {
        name:'Torta',
        tipo:'Chocolate',
        id:1
     },
     {
        name:'Torta',
        tipo:'Cafe',
        id:2
     },
     {
        name:'Torta',
        tipo:'Vainilla',
        id:3
     }

]

function App  ()  {
const [contador, setContador]=useState(0)
const incrementar = ()=>{
    setContador(contador +1)
}
const decrementar = ()=>{
    setContador(contador -1)
}
 
 let fecha = new Date()
    return(
        <Fragment>
        <Header/>
        <ItemListContainer  greeting="Bienvenidos"/>
        
        <h1>{`El número es: ${contador}, ${fecha}` }</h1>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        {productos.map((product) => {
            return(
                <div key={productos.id}>
                    <h1>{productos.name}</h1>
                    <p>{productos.tipo}</p>
                </div>
            )
        })}
        {/*<Login/>  
<div>
    <Input styleClass="dark1" queTipoSoy="number"/>
        </div>*/}


        </Fragment>
        

    )
}
export default App