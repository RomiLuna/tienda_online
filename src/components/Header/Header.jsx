import './index.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
    return(

         <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Portefolio</a>
            <a href="#">Contact</a>
            <div class="animation start-home"></div>

            <CartWidget></CartWidget>
        </nav>
        
        
    )
}
export default Header