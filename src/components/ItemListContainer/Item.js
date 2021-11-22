import	React  from 'react'

const Item=({item}) => {
    return <div>
        <img src={item.img} alt={item.alt} />
        <p >${item.price}</p>
    </div>

};
export default Item;