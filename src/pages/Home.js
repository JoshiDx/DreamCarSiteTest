import React, {Component} from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Carousel from 'nuka-carousel';




export default function Home() {
    return(
        <body className={"App-body"}>
        <div className={"App-bodySliderImgs"}>
            <div className={"App-bodyCarouselText"}>
                <h6 className={"App-sliderTextF"}>КРУПНЕЙШИЙ МЕЖДУНАРОДНЫЙ</h6>
                <h6 className={"App-sliderTextTw"}>ПОСТАВЩИК</h6>
                <h6 className={"App-sliderTextTh"}>ТОВАРОВ ДЛЯ АВТОМОБИЛЕЙ</h6>
            </div>
            <div className={"App-bodyCarouselTextTw"}>
                <h6 className={"App-bodyCarouselTextTwText"}>
                    Технологии Dream Car опережают время.<br />
                    Уже сегодня мы предлагаем уникальные <br />
                    качественные материалы по доступным <br />
                    ценам, которые не имеют аналогов
                </h6>
            </div>
            <Carousel className={"App-bodyCarousel"} cellAlign={"center"} cellSpacing={"40"} slidesToShow={"1"} wrapAround = {true} withoutControls={true} autoplay={true} speed={1000} >
                <img src={require('../images/img1.png')} className={"App-bodyCarouselSlide"} />
                <img src={require('../images/img1.png')} className={"App-bodyCarouselSlide"} />
                <img src={require('../images/img1.png')} className={"App-bodyCarouselSlide"} />
            </Carousel>
        </div>
        <div className={"App-bodyAboutUs"}>
            <p className={"App-bodyAboutUsTextP"}>О НАС</p>
            <p className={"App-bodyAboutUsTextPa"}>Создаём высококачественную продукцию <br /> для лучшей жизни</p>
            <div className={"App-bodyAboutUsBlock"}>
                <img src={require('../images/map.png')} className={"App-bodyAboutUsBlockImg"} />
                <div className={"App-bodyAboutUsTextBlock"}>
                    <p className={"App-bodyAboutUsTextPb"}>20</p>
                    <p className={"App-bodyAboutUsTextPn"}>Регионов<br />присутствия</p>
                </div>
            </div>
            <div className={"App-bodyAboutUsBlock"}>
                <img src={require('../images/hand.png')} className={"App-bodyAboutUsBlockImgHand"} />
                <div className={"App-bodyAboutUsTextBlock"}>
                    <p className={"App-bodyAboutUsTextPb"}>>400</p>
                    <p className={"App-bodyAboutUsTextPn"}>Реализованных<br />партнеров</p>
                </div>
            </div>
            <div className={"App-bodyAboutUsBlock"}>
                <img src={require('../images/peoples.png')} className={"App-bodyAboutUsBlockImgPeoples"} />
                <div className={"App-bodyAboutUsTextBlock"}>
                    <p className={"App-bodyAboutUsTextPb"}>60</p>
                    <p className={"App-bodyAboutUsTextPn"}>Лет<br />На рынке</p>
                </div>
            </div>
            <div className={"App-bodyAboutUsBlock"}>
                <img src={require('../images/factory.png')} className={"App-bodyAboutUsBlockImgFactory"} />
                <div className={"App-bodyAboutUsTextBlock"}>
                    <p className={"App-bodyAboutUsTextPb"}>>3000</p>
                    <p className={"App-bodyAboutUsTextPn"}>м2 производственных<br />и складских помещений</p>
                </div>
            </div>
        </div>
        <div className={"App-bodyCatalog"}>
            <p className={"App-bodyCatalogTitle"}>КАТАЛОГ</p>
            <div className={"App-bodyCatalogPlates"}>
                <div className={"App-bodyCatalogPlate"}>
                    <p className={"App-bodyCatalogPlateTextF"}>01</p>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTw"}>ШУМОИЗОЛЯЦИЯ</p>
                    </div>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTh"}>80 ТОВАРОВ</p>
                    </div>
                    <img src={require('../images/right-arrow.png')} className={"App-bodyCatalogPlateIco"} />
                </div>
                <div className={"App-bodyCatalogPlate"}>
                    <p className={"App-bodyCatalogPlateTextF"}>02</p>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTw"}>НАБОР ИНСТРУМЕНТОВ</p>
                    </div>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTh"}>14 ТОВАРОВ</p>
                    </div>
                    <img src={require('../images/right-arrow.png')} className={"App-bodyCatalogPlateIco"} />
                </div>
                <div className={"App-bodyCatalogPlate"}>
                    <p className={"App-bodyCatalogPlateTextF"}>03</p>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTw"}>КОВРИКИ EVA</p>
                    </div>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTh"}>56 ТОВАРОВ</p>
                    </div>
                    <img src={require('../images/right-arrow.png')} className={"App-bodyCatalogPlateIco"} />
                </div>
                <div className={"App-bodyCatalogPlate"}>
                    <p className={"App-bodyCatalogPlateTextF"}>04</p>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTw"}>КАРБОН</p>
                    </div>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTh"}>37 ТОВАРОВ</p>
                    </div>
                    <img src={require('../images/right-arrow.png')} className={"App-bodyCatalogPlateIco"} />
                </div>
                <div className={"App-bodyCatalogPlate"}>
                    <p className={"App-bodyCatalogPlateTextF"}>05</p>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTw"}>ОБИВОЧНЫЕ МАТЕРИАЛЫ</p>
                    </div>
                    <div className={"App-bodyCatalogPlateTextContainer"}>
                        <p className={"App-bodyCatalogPlateTextTh"}>120 ТОВАРОВ</p>
                    </div>
                    <img src={require('../images/right-arrow.png')} className={"App-bodyCatalogPlateIco"} />
                </div>
            </div>
            <div className={"App-bodyCatalogShowMore"}>
                <p className={"App-bodyCatalogShowMoreText"}>
                    СМОТРЕТЬ ВСЕ
                </p>
            </div>
        </div>
        <div className={"App-bodyServices"}>
            <p className={"App-bodyServicesTitel"}>СЕРВИСЫ</p>
            <div className={"App-bodyServicesPlates"}>
                <div className={"App-bodyServicesPlate"}>
                    <p className={"App-bodyServicesPlateTextF"}>РАСЧЕТ МАТЕРИАЛОВ</p>
                    <img src={require('../images/calc.png')} className={"App-bodyServicesPlateImg"} />
                    <p className={"App-bodyServicesPlateTextTw"}>Узнайте необходимое количество<br />
                        материалов на свою модель авто</p>
                    <div className={"App-bodyServicesPlateShowMore"}>
                        <p className={"App-bodyServicesPlateShowMoreText"} >ПОДРОБНЕЕ</p>
                        <img src={require('../images/Arrow2.png')} className={"App-bodyServicesShowMoreImg"} />
                    </div>
                </div>
                <div className={"App-bodyServicesPlate"}>
                    <p className={"App-bodyServicesPlateTextF"}>СОЗДАЙТЕ СВОЙ КОВРИК</p>
                    <img src={require('../images/colour-palitra.png')} className={"App-bodyServicesPlateImg"} />
                    <p className={"App-bodyServicesPlateTextTw"}>В нашем магазине в подарок вы <br />
                        можете подобрать эва автоковры</p>
                    <div className={"App-bodyServicesPlateShowMore"}>
                        <p className={"App-bodyServicesPlateShowMoreText"}>ПОДРОБНЕЕ</p>
                        <img src={require('../images/Arrow2.png')} className={"App-bodyServicesShowMoreImg"} />
                    </div>
                </div>
            </div>
        </div>
        <div className={"App-bodyReq"}>
            <p className={"App-bodyReqTitle"}>ПРЕИМУЩЕСТВА</p>
            <p className={"App-bodyReqTitleTw"}>ОСНОВНЫЕ ПЛЮСЫ КОМПАНИИ</p>
            <div className={"App-bodyReqPlates"}>
                <div className={"App-bodyReqPlateBlock"}>
                    <div className={"App-bodyReqPlate"}>
                        <p className={"App-bodyReqPlateTextF"}>01/</p>
                        <p className={"App-bodyReqPlateTextTw"}>БОЛЕЕ 12 ЛЕТ <br /> ПРОДУКТИВНОЙ РАБОТЫ</p>
                    </div>
                    <div className={"App-bodyReqPlateFooter"}>
                        <div className={"App-bodyReqPlateFooterPack"}>
                            <p className={"App-bodyReqPlateFooterPackText"}>Благодаря приобретенному <br />
                                опыту предугадываем желания <br />
                                покупателей и обновляем <br />
                                ассортимент</p>
                        </div>
                    </div>
                </div>
                <div className={"App-bodyReqPlateBlock"}>
                    <div className={"App-bodyReqPlate"}>
                        <p className={"App-bodyReqPlateTextF"}>02/</p>
                        <p className={"App-bodyReqPlateTextTw"}>ДОСТУПНЫЕ ЦЕН <br />
                            И УСЛУГИ</p>
                    </div>
                    <div className={"App-bodyReqPlateFooter"}>
                        <div className={"App-bodyReqPlateFooterPack"}>
                            <p className={"App-bodyReqPlateFooterPackText"}>Благодаря приобретенному <br />
                                опыту предугадываем желания <br />
                                покупателей и обновляем <br />
                                ассортимент</p>
                        </div>
                    </div>
                </div>
                <div className={"App-bodyReqPlateBlock"}>
                    <div className={"App-bodyReqPlate"}>
                        <p className={"App-bodyReqPlateTextF"}>03/</p>
                        <p className={"App-bodyReqPlateTextTw"}>ОПЕРАТИВНОСТЬ <br /> ВЫПОЛНЕНИЯ ЗАКАЗОВ</p>
                    </div>
                    <div className={"App-bodyReqPlateFooter"}>
                        <div className={"App-bodyReqPlateFooterPack"}>
                            <p className={"App-bodyReqPlateFooterPackText"}>Благодаря приобретенному <br />
                                опыту предугадываем желания <br />
                                покупателей и обновляем <br />
                                ассортимент</p>
                        </div>
                    </div>
                </div>
                <div className={"App-bodyReqPlateBlock"}>
                    <div className={"App-bodyReqPlate"}>
                        <p className={"App-bodyReqPlateTextF"}>04/</p>
                        <p className={"App-bodyReqPlateTextTw"}>ВЫСОКОЕ КАЧЕСТВО И<br /> ТЕХНОЛОГИЙ ПРОИЗВОДСТВА</p>
                    </div>
                    <div className={"App-bodyReqPlateFooter"}>
                        <div className={"App-bodyReqPlateFooterPack"}>
                            <p className={"App-bodyReqPlateFooterPackText"}>Благодаря приобретенному <br />
                                опыту предугадываем желания <br />
                                покупателей и обновляем <br />
                                ассортимент</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"App-bodyMapYandex"}>
            <p className={"App-bodyMapYandexTableTitle"}>РЕГИОНЫ ПРИСУТСТВИЯ</p>
            <div className={"App-bodyMapYandexBody"}>
                <div className={"App-bodyMapYandexTable"}>
                    <div className={"App-bodyMapYandexTableTab"}>
                        <p className={"App-bodyMapYandexTableText"}  >КАЗАХСТАН</p>
                    </div>
                    <div className={"App-bodyMapYandexTableTab"}>
                        <p className={"App-bodyMapYandexTableText"}>РОССИЯ</p>
                    </div>
                    <div className={"App-bodyMapYandexTableTab"} >
                        <p className={"App-bodyMapYandexTableText"} >АРМЕНИЯ</p>
                    </div>
                    <div className={"App-bodyMapYandexTableTab"}>
                        <p className={"App-bodyMapYandexTableText"}>УЗБЕКИСТАН</p>
                    </div>
                    <div className={"App-bodyMapYandexTableTab"}>
                        <p className={"App-bodyMapYandexTableText"}>БЕЛОРУСЬ</p>
                    </div>
                    <div className={"App-bodyMapYandexTableTab"}>
                        <p className={"App-bodyMapYandexTableText"}>УКРАИНА</p>
                    </div>
                    <div className={"App-bodyMapYandexTableTab"}>
                        <p className={"App-bodyMapYandexTableText"}>ИРАН</p>
                    </div>
                </div>
                <div id={"MapYam"} className={"App-bodyMapYandexMap"}>
                    <YMaps>
                        <Map defaultState={{center:[55.7522, 37.6156],zoom:7}} width={"1050px"} height={"600px"} />
                    </YMaps>
                </div>
            </div>
        </div>
        </body>
    );
}