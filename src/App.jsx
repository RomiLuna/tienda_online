import { Fragment} from 'react';
import Header from './components/Header/Header.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
function App  ()  {
    
    return(
        <Fragment>
        <Header/>            
        <ItemListContainer  greeting="Bienvenidos"/>             
        </Fragment>
        

    )
}
export default App