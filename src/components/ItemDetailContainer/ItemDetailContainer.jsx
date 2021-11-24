import React,{useState,useEffect} from "react";
// import ItemList from "../ItemListContainer/ItemList";
import { products } from '../ItemListContainer/items';
import ItemDetail from "./ItemDetail";

const  ItemDetailContainer  = (props) =>{
   
    const [items, setItems] = useState([]); //creo una variable para guardar
 
    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products[3]);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setItems(res); //se setean los productos en la variable items
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); //el useEffect se ejecuta una sola vez cuando el componente se monta

   return(       
       <>
            {/* <ItemList items = {items} /> */}
              <ItemDetail items = {items} />
       </>
        ); 
    };

export default ItemDetailContainer;