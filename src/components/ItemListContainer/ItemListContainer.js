import React,{useState} from "react";
import ItemList from "./ItemList";
import {productos} from './Item';
const  ItemListContainer  = (props) =>{
   

 
        const[items,setItems]=useState([]);


        const traerProductos = new Promise((resolve,reject) => {
          setTimeout(() => {
                    resolve (productos);
                },2000);
          
        });
    
    traerProductos
    .then((res)=>{
        setItems(res);
    })
    .catch((error) => {
        console.log(error)
    })

   return(       
       <>
       <h1> {props.greeting} </h1>
       <ItemList items = {items} />
       </>
        ); 
    };

export default ItemListContainer;