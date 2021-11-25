import React,{useState,useEffect} from "react";
import ItemList from "./ItemList.jsx";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx";
import { products } from './items';

const  ItemListContainer  = (props) =>{
   
    const [items, setItems] = useState([]); //creo una variable para guardar
 
    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
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
       <h1> {props.greeting} </h1>
       <ItemList items = {items} /> 
      { /*<ItemDetailContainer/>*/}
       </>
        ); 
    };

export default ItemListContainer;