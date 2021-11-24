const ItemDetail=({item}) => {
    return <div>
        <img src={item.img} alt={item.name}/>
        <p >${item.price}</p>
        <p >${item.tipo}</p>
    </div>

};
export default ItemDetail;