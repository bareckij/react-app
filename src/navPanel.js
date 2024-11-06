import './navPanel.css';
import Star from "./img/Star.png";
import Cart from "./img/cart.png";

const NavPanel = () => {
    return (  
        <nav className="navPanel">
            <div className="Logo"> 
                <img src={Star} />        
                <p>Ink. House</p>
            </div>
            <div className="Panel">    
                <p>Репродукции</p>
                <p>Новинки</p>
                <p>О нас</p>
                <img src={Cart}/>
            </div>
        </nav>
    );
}
 
export default NavPanel;