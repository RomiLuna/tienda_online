export const producto =[
    {
        name:'Torta',
        tipo:'Chocolate',
        id:1
     },
     {
        name:'Torta',
        tipo:'Cafe',
        id:2
     },
     {
        name:'Torta',
        tipo:'Vainilla',
        id:3
     }

]

const devolverProductos =() => {
    return new Promise((resolve,reject)=>{
        if (true){
            setTimeout(()=>{
                resolve ({productos.map((product) => {
                    return(
                        <Item Key={product.id}
                        />
                             )
                                                     })
                 })},2000)
        }else {
            reject('no se pudo realizar la carga')
        }
    })
}