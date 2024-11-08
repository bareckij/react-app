import BigLogo from "./img/BigLogo.png"
import './css/New.css'
const New = () => {
    return (
        <div className="new-content">
            <div className="new-content_text">
                <div className="new-content_text_head">
                    <img src={BigLogo} alt="" />
                    <p>Новая коллекция французских авторов

                    </p>
                </div>
                <p>
                    <br/>    
                    Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. 
                    <br/>
                    <br/>
                    Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
                </p>
                <button className="new-content_text_button">Ознакомится</button>
            </div>
        </div>
    );
}
 
export default New;