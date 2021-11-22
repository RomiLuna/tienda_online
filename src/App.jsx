import { Fragment, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login';
import Input from './components/Input/Input.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App()  {
   
    return(
        <>
        <Fragment>
        <Header/>
        <ItemListContainer  greeting="Bienvenidos 🤗"/>
        </Fragment>        
        </>
        );
    }

    export default App
        


       