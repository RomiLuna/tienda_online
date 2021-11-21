import { Fragment, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login'
import Input from './components/Input/Input.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App  ()  {
const [contador, setContador]=useState(0)
const incrementar = ()=>{
    setContador(contador +1)
}
const decrementar = ()=>{
    setContador(contador -1)
}
    return(
        <Fragment>
        <Header/>
        <ItemListContainer  greeting="Bienvenidos"/>
        
        <h1>{`El número es: ${contador}`}</h1>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        {/*<Login/>  
<div>
    <Input styleClass="dark1" queTipoSoy="number"/>
        </div>*/}


        </Fragment>
        

    )
}
export default App