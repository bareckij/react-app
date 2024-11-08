import './css/navPanel.css';
import Star from "./img/Star.png";
import Cart from "./img/cart.png";

const NavPanel = () => {
    return (  
        <nav className="navPanel">
            <div className="navPanel-Logo"> 
                <img src={Star} alt=" " />        
                <p>Ink. House</p>
            </div>
            <div className="navPanel-Panel">    
                <p>Репродукции</p>
                <p>Новинки</p>
                <p>О нас</p>
                <img src={Cart} alt=" "/>
            </div>
        </nav>
    );
}
 
export default NavPanel;