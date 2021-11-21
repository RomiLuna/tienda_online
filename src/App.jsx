import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login'
import Input from './components/Input/Input.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

const App = () => {
    return(
        <Fragment>
        <Header/>
        <ItemListContainer  greeting="Bienvenidos"/>
       {/* <Login/>  */}
{/*<div>
    <Input styleClass="dark1" queTipoSoy="number"/>
</div>*/}

        </Fragment>
        

    )
}
export default App