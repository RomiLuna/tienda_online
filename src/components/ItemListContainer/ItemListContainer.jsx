import ItemCount from "../ItemCount/ItemCount.jsx"

const  ItemListContainer  = (props) =>{
   
   return(       
       <div>
       <h1> {props.greeting} </h1>
       <ItemCount initial={1} stock={10}/>
       </div>
       )
    }

export default ItemListContainer 