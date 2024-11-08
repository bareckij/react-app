import './css/ProductList.css';
import Amur from "./img/03.jpg";
import Dama from "./img/Dama.jpg"
import Paysage from "./img/Paysage.jpg"
import Procedura from "./img/Procedura.jpg"
import Trapeza from "./img/Trapeza.jpg"
import Rosa from "./img/Rosa.jpg"
import gorod from "./img/gorod.jpg"
import ptency from "./img/ptency.jpg"
import sredi from "./img/sred.jpg"
import yarkaya from "./img/yarkaya.jpg"
import dzuatly from "./img/dzuatly.jpg"
import vody from "./img/vody.jpg"

import Zver from "./img/Zver.jpg"
import Popug from "./img/Popug.jpg"
import Ryba from "./img/Ryba.jpg"
import Kot from "./img/Kot.jpg"
import Bereg from "./img/Bereg.jpg"
import Gory from "./img/Gory.jpg"


import {useState} from 'react';
const paintings =[
    {id: 1, image: Amur, title:'Охота Амура', author: "Марсель Руссо", material:"Холст, масло (50х80)", price: '14 500 руб', country: 'Франция'},
    {id: 2, image: Dama, title:'Дама с собачкой', author: "Анри Селин", material:"Акрил, бумага (50х80) ", price: '16 500 руб', country: 'Франция'},
    {id: 3, image: Procedura, title:'Процедура', author: "Франсуа Дюпон", material:"Цветная литография (40х60) ", price: '20 000 руб', country: 'Франция'},
    {id: 4, image: Rosa, title:'Роза', author: "Луи Детуш", material:"Бумага, акрил (50х80) ", price: '12 000 руб', country: 'Франция'},
    {id: 5, image: Trapeza, title:'Птичья трапеза', author: "Франсуа Дюпон", material:"Цветная литография (40х60)  ", price: '22 500 руб', country: 'Франция'},
    {id: 6, image: Paysage, title:'Пейзаж с рыбой', author: "Пьер Моранж", material:"Цветная литография (40х60)  ", price: '20 000 руб', country: 'Франция'},

    {id: 7, image: gorod, title:'Над городом', author: "Курт Вернер", material:"Цветная литография (40х60) ", price: '16 000 руб', country: 'Германия'},
    {id: 8, image: ptency, title:'Птенцы', author: "Макс Рихтер", material:"Холст, масло (50х80) ", price: '14 500 руб', country: 'Германия'},
    {id: 9, image: sredi, title:'Среди листьев', author: "Мартин Майер", material:"Цветная литография (40х60)  ", price: '20 000 руб', country: 'Германия'},
    {id: 10, image: yarkaya, title:'Яркая птица', author: "Герман Беккер", material:"Цветная литография (40х60)  ", price: '13 000 руб', country: 'Германия'},
    {id: 11, image: dzuatly, title:'Дятлы', author: "Вульф Бауэр", material:"Бумага, акрил (50х80)   ", price: '20 000 руб', country: 'Германия'},
    {id: 12, image: vody, title:'Большие воды', author: "Вальтер Хартманн", material:"Бумага, акрил (50х80)   ", price: '23 000 руб', country: 'Германия'},

    {id: 13, image: Zver, title:'Дикий зверь', author: "Пол Смит", material:"Акварель, бумага (50х80)  ", price: '19 500 руб', country: 'Англия'},
    {id: 14, image: Bereg, title:'Скалистый берег', author: "Джон Уайт", material:"Цветная литография (40х60) ", price: '17 500 руб', country: 'Англия'},
    {id: 15, image: Gory, title:'Река и горы', author: "Джим Уотсон", material:"Акварель, бумага (50х80)   ", price: '20 500 руб', country: 'Англия'},
    {id: 16, image: Popug, title:'Белый попугай', author: "Юджин Зиллион", material:"Цветная литография (40х60)  ", price: '15 500 руб', country: 'Англия'},
    {id: 17, image: Ryba, title:'Ночная рыба', author: "Эрик Гиллман", material:"Бумага, акрил (50х80)   ", price: '12 500 руб', country: 'Англия'},
    {id: 18, image: Kot, title:'Рыжий кот', author: "Альфред Барр", material:"Цветная литография (40х60)    ", price: '21 000 руб', country: 'Англия'},
]

const ProductList = () => {
    const [selectedCountry, setSelectedCountry] = useState('Франция');
    const filteredPaintings = paintings.filter(painting => painting.country === selectedCountry) 
    return ( 
        <div className="ProductList">
            <div className="ProductList-container">
                <div className="ProductList-container-header">
                    <p>Репродукции</p>
                    <div className="ProductList-container-header-buttons">
                        <button
                        className={selectedCountry === 'Франция' ? 'active' : ''}
                        onClick={() => setSelectedCountry('Франция')}>Франция</button>
                        <button 
                        className={selectedCountry === 'Германия' ? 'active' : ''}
                        onClick={() => setSelectedCountry('Германия')}>Германия</button>
                        <button 
                        className={selectedCountry === 'Англия' ? 'active' : ''}
                        onClick={() => setSelectedCountry('Англия')}>Англия</button>
                    </div>
                </div>
                <div className="ProductList-container-content"> 
                    {filteredPaintings.map(painting => (
                        <div key={painting.id} className="ProductList-container-content-product">
                            <img src={painting.image} alt="" />
                            <h4>{painting.author}</h4>
                            <h3>{painting.title}</h3>
                            <p>{painting.material}</p>
                            <p className='Price'>{painting.price}</p>
                            <button className='ProductList-container-content-product_button'>В корзину</button>
                        </div> 
                    ))

                    }
                </div>
            </div>
        </div>
    );
}
 
export default ProductList;