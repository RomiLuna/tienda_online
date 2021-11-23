import './index.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

const Header = () => {
    return(

         <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Portefolio</a>
            <a href="#">Contact</a>
            <div className="animation start-home"></div>

            <CartWidget></CartWidget>
        </nav>
        
        
    )
}
export default Header