const Item=({item}) => {
    return <div>
        <img src={item.img} alt={item.name}/>
        <p >${item.price}</p>
    </div>

};
export default Item;