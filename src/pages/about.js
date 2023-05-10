import React, {Component} from 'react';
import {Map, YMaps} from "@pbe/react-yandex-maps";
import Carousel from "nuka-carousel";

class About extends Component {
    render() {
        return (
            <div className={"App-aboutPageMain"}>
                <div className={"App-abouPageFirstBlock"}>
                    <p className={"App-abouPageFirstBlockTitle"}>О КОМПАНИИ</p>
                    <div className={"App-aboutFirstBlockPhoto"}>
                        <img src={require('../images/sasha.png')} className={"App-aboutFirstBlockPhotoClass"}/>
                        <img src={require('../images/factoryPic.png')} className={"App-aboutFirstBlockPhotoClassTw"}/>
                    </div>
                </div>
                <div className={"App-aboutPageTextBlockF"}>
                    <p className={"App-aboutPageTextTitle"}>С ЧЕГО МЫ НАЧИНАЛИ</p>
                    <div className={"App-aboutPageTextBlockBlock"}>
                        <div className={"App-aboutPageTextBlockColumn"}>
                            <div className={"App-aboutPageTextBlockColumns"}>
                                <p className={"App-aboutPageTextBlockColumnText"}>Производственные мощности</p>
                                <p className={"App-aboutPageTextBlockColumnTextDesc"}>100 ед товара в день</p>
                            </div>
                        </div>
                        <div className={"App-aboutPageTextBlockColumn"}>
                            <div className={"App-aboutPageTextBlockColumns"}>
                                <p className={"App-aboutPageTextBlockColumnText"}>Ассортимент</p>
                                <p className={"App-aboutPageTextBlockColumnTextDesc"}>Несколько видов шумоизоляции</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"App-aboutPageTextBlockF"}>
                    <p className={"App-aboutPageTextTitle"}>К ЧЕМУ МЫ ПРИШЛИ</p>
                    <div className={"App-aboutPageTextBlockBlock"}>
                        <div className={"App-aboutPageTextBlockColumn"}>
                            <div className={"App-aboutPageTextBlockColumns"}>
                                <p className={"App-aboutPageTextBlockColumnText"}>Производственные мощности</p>
                                <p className={"App-aboutPageTextBlockColumnTextDesc"}>5000 ед товара в день</p>
                            </div>
                        </div>
                        <div className={"App-aboutPageTextBlockColumn"}>
                            <div className={"App-aboutPageTextBlockColumns"}>
                                <p className={"App-aboutPageTextBlockColumnText"}>Освоили и внедрили новые виды продукции</p>
                                <p className={"App-aboutPageTextBlockColumnTextDesc"}>Десятки видов шумоизоляции, инструменты, напольные покрытия, ковриков ЭВА</p>
                            </div>
                        </div>
                        <div className={"App-aboutPageTextBlockColumn"}>
                            <div className={"App-aboutPageTextBlockColumns"}>
                                <p className={"App-aboutPageTextBlockColumnText"}>Ассортимент</p>
                                <p className={"App-aboutPageTextBlockColumnTextDesc"}>Десятки видов шумоизоляции, инструменты, напольные покрытия, ковриков ЭВА</p>
                            </div>
                        </div>
                        <div className={"App-aboutPageTextBlockColumn"}>
                            <div className={"App-aboutPageTextBlockColumns"}>
                                <p className={"App-aboutPageTextBlockColumnText"}>Доставка</p>
                                <p className={"App-aboutPageTextBlockColumnTextDesc"}>Благодаря собственному автопарку, мы осуществляем бесплатную доставку оптовых заказов по России. Розничные заказы отгружаем удобными для клиентов транспортными компаниями: СДЭК, ПЭК, Почта России.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"App-aboutPageBlockCertifcate"}>
                    <div className={"App-aboutPageTextBlockCert"}>
                        <p className={"App-aboutPageTextTitle"}>СЕРТИФАКТЫ И ДИПЛОМЫ</p>
                    </div>
                    <div className={"App-aboutPageCertificateCarousel"}>
                        <p className={"App-aboutPageTextTitle"}>Сертификаты и дипломы</p>
                        <Carousel className={"App-aboutCarouselSlider"} cellAlign={"center"} cellSpacing={"150"} slidesToShow={"1"} wrapAround = {false} withoutControls={true} autoplay={true} speed={1000} slideWidth={"10%"} >
                            <img src={require('../images/certifacate.png')} className={"App-aboutCarouselSlide"} />
                            <img src={require('../images/certifacate.png')} className={"App-aboutCarouselSlide"} />
                            <img src={require('../images/certifacate.png')} className={"App-aboutCarouselSlide"} />
                        </Carousel>
                    </div>
                </div>
                <div className={"App-aboutPageContacts"}>
                    <div className={"App-catalogMap"}>
                        <p className={"App-catalogMapTitel"}>КОНТАКТЫ</p>
                        <YMaps >
                            <Map defaultState={{center:[47.429160, 40.052654],zoom:18}} width={"500px"} height={"400px"}/>
                        </YMaps>
                    </div>
                    <div className={"App-contactsBodyPlates"}>
                        <div className={"App-contactsBodyPlate"}>
                            <p className={"App-contactsBodyPlateTextF"}>АДРЕС</p>
                            <p className={"App-contactsBodyPlateTextTw"}>346400, г.Новочеркасск,<br /> ул.Добролюбова 194Б</p>
                        </div>
                        <div className={"App-contactsBodyPlate"}>
                            <p className={"App-contactsBodyPlateTextF"}>ГРАФИК РАБОТЫ</p>
                            <p className={"App-contactsBodyPlateTextTw"}>Пн - Пт 8:00 до 18:00</p>
                        </div>
                        <div className={"App-contactsBodyPlate"}>
                            <p className={"App-contactsBodyPlateTextF"}>ТЕЛЕФОНЫ</p>
                            <p className={"App-contactsBodyPlateTextTw"}>8 800 35 011 05<br /> бесплатный звонок по России</p>
                        </div>
                        <div className={"App-contactsBodyPlate"}>
                            <p className={"App-contactsBodyPlateTextF"}>E-MAIL</p>
                            <p className={"App-contactsBodyPlateTextTw"}>admin@avto-dreamcar.ru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;