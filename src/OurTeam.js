import Hand from './img/Hand.png'
import Frame from './img/Frame.png'
import First from './img/First.png'
import Second from './img/Second.jpg'
import Third from './img/Third.jpg'
import './css/OurTeam.css'

const OurTeam = () => {
    return (
        <div className="OurTeam-container">
            <div className="OutTeam-content">
                <div className="OurTeam-content_img">
                    <img src={Frame} alt="" className='main-image' />
                    <img src={Hand} alt="" className='overlay-image'/>
                </div>
                <div className="OurTeam-content_text">
                    <p className="Header-text">Наша команда</p>
                    <p className="Main-text">Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                    <div className="OurTeam-content_text_imgs">
                        <img src={First} alt="" /><img src={Second}  alt="" /><img src={Third} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OurTeam;