import './index.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const Header = () => {
    return(

         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/porfolio">Portefolio</Link>
            <Link to="/contac">Contact</Link>
            <div class="animation start-home"></div>

            <CartWidget></CartWidget>
        </nav>
        
        
    )
}
export default Header