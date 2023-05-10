import React, {Component} from 'react';
import {Link} from "react-router-dom";
import about from "./about";

class Navbar extends Component {
    render() {
        return (
                <header className={"App-header"}>
                    <div className={"App-upperHeader"}>
                        <Link className={"App-headerLogo"} to={"/"}>
                            <h1>DREAMCAR</h1>
                        </Link>
                        <div className={"App-upperHeaderSlectCity"}>
                            <img src={require('../images/map_ping.png')} className={"App-headerCityPing"} />
                            <p className={"App-upperHeaderCity"}>Москва</p>
                        </div>
                        <div className={"App-upperSerchArea"}>
                            <input type={"text"} placeholder={"Поиск по каталогу"} className={"App-upperHeaderSearch"}/>
                            <img src={require('../images/search.png')} className={"App-upperHeaderSearchPong"} />
                        </div>
                        <div className={"App-upperHeaderContacts"}>
                            <div className={"App-upperHeaderContactsPhonePic"}>
                                <img src={require('../images/phone.png')} className={"App-upperHeaderContactIco"} />
                                <p className={"App-upperHeaderContactsPhone"}>8-800-350-11-05</p>
                            </div>
                            <p className={"App-upperHeaderContactInf"}>Звонок бесплатный 05:00 – 22:00</p>
                        </div>
                        <div className={"App-eventIcoBlock"}>
                            <img src={require('../images/heart.png')} className={"App-headerEventIco"} />
                            <Link to={"/login"}><img src={require('../images/userIco.png')} className={"App-headerEventIco"} /></Link>
                            <img src={require('../images/cartIco.png')} className={"App-headerEventIco"} />
                        </div>
                    </div>
                    <div className={"App-headerTextArea"}>
                        <div className={"App-headerTextAreaBlock"}>
                            <img src={require('../images/main-menu.png')} className={"App-headerTextIco"} />
                            <p className={"App-headerText"}><Link to={"/catalog"} className={"App-headerText"}>Каталог</Link></p>
                        </div>
                        <div className={"App-headerTextAreaBlock"}>
                            <p className={"App-headerText"}>Сервисы</p>
                        </div>
                        <div className={"App-headerTextAreaBlock"}>
                            <p className={"App-headerText"}>Блог</p>
                        </div>
                        <div className={"App-headerTextAreaBlock"}>
                            <p className={"App-headerText"}><Link to={"/about"} className={"App-headerText"}>О нас</Link></p>
                        </div>
                        <div className={"App-headerTextAreaBlock"}>
                            <p className={"App-headerText"}>Стать партнером</p>
                        </div>
                    </div>
                    <ul className={"App-catalogDropdown"}>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/soundProof.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Шумоизоляция</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/toolsIco.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Инструменты</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/evaCarpet.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>EVA Коврики</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/carpet.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Акустические ткани</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/car-services.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Элементы тюнинга</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/carbon-nanotube.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Карбон</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/carpet2.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Напольные покрытия</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/spray.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Автохимия и автокосметика</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/lyasoped.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Велосипеды</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/obivochnie.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Обивочные материалы</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                        <div className={"App-catalogDropdownSelector"}>
                            <img src={require('../images/dynamic.png')} className={"App-catalogDropdownIco"} />
                            <p className={"App-catalogDropdownText"}>Акустика</p>
                            <img src={require('../images/Arrow 8.png')} className={"App-catalogDropdownIcoArrow"} />
                        </div>
                    </ul>
                </header>
        );
    }
}

export default Navbar;
