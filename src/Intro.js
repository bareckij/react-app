import "./Intro.css"
import Pigeon from './img/Pigeon.png';

const Intro = () => {
    return ( 
        <div className="content">
            <img src={Pigeon}/>
            <div className="side">
                <h1>Реплики картин от <span>Ink. House</span></h1>
                <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                <button className="Buttn">Продукция</button>
            </div>        
        </div>
    );
}
 
export default Intro;