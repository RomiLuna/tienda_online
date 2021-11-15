 import './index.css'
 const  Input = (props) =>{
    
    return(
        <input className={props.styleClass} type={props.queTipoSoy} placeholder={props.queDigo}/>
    )
}

export default Input