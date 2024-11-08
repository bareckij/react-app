import "./css/Intro.css"
import Pigeon from './img/Pigeon.png';

const Intro = () => {
    return ( 
        <div className="Intro_content">
            <img src={Pigeon} alt=" "/>
            <div className="Intro_content-side">
                <h1>Реплики картин от <span>Ink. House</span></h1>
                <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                <button className="Intro_content-side-Buttn">Продукция</button>
            </div>        
        </div>
    );
}
 
export default Intro;