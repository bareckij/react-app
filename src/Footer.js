import './css/footer.css';
import Star from "./img/Star.png";

const NavPanel = () => {
    return (  
        <div className="Footer">
            <div className='col Left'>
                <div className="footer-Logo"> 
                    <img src={Star} alt=" " />        
                    <p>Ink. House</p>

                </div>
                <div className='sec_row Number'>
                    <a href="tel:+7(999)5435454">+7 (999) 543-54-54</a>
                    <p>Мастерская</p>
                </div>
            </div>
            <div className='col'>
                    <p className='second_Header'>Репродукции</p>
                    <p className='second_main'>Франция</p>
                    <p className='second_main'>Германия</p>
                    <p className='second_main'>Англия</p>
            </div>
            <div className='col'>
                    <p className='second_Header'>Новинки</p>
                    <p className='second_main'>2021</p>
                    <p className='second_main'>2020</p>
            </div>
            <div className='col'>
                    <p className='second_Header'>О нас</p>
                    <p className='second_main'>Художники</p>
            </div>
            <div className='col Empty'>
                    <p className='second_Header'></p>
                    <p className='second_main'></p>
            </div>

            <div className='col Right'>
                    <p className='second_Header'>О нас</p>
                    <p className='second_main'>Ink. House ®</p>
                    <p className='second_main'>All rights reserved</p>
            </div>
        </div>
            
    );
}
 
export default NavPanel;