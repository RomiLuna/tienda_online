import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
// import Login from './components/Login/Login';
// import Input from './components/Input/Input.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
function App()  {
   
    return(
        <>
        <Fragment>
            <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>   
            <Route path='/About' element={<About/>}/>      
        </Routes>
        </BrowserRouter>
        <ItemListContainer  greeting="Bienvenidos 🤗"/>
        </Fragment>        
        </>
        );
    }

    export default App
        


       