import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
// import Login from './components/Login/Login';
// import Input from './components/Input/Input.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App()  {
   
    return(
        <>
        <Fragment>
            <BrowserRouter>
        <Header/>
        <Routers>
            <Route path='/' element={<Home/>}/>            
        </Routers>
        </BrowserRouter>
        <ItemListContainer  greeting="Bienvenidos 🤗"/>
        </Fragment>        
        </>
        );
    }

    export default App
        


       