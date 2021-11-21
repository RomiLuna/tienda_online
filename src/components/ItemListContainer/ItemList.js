import listaproducto from './Item'
 
function ItemList  ()  {
    
        return(
            <Fragment>
            
            {productos.map((product) => {
               return(
                   <Item Key={product.id}
                   />
                        )
                                                })
            }
         
    
            </Fragment>
            
    
        )
    }
    export default ItemList