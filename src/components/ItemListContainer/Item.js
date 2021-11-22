import	React  from 'react'

const Item=({item})=> {
    return <div>
        <img src={item.img} alt={item.alt} />
    </div>

}
export default Item;