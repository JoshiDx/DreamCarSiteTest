import React, {Component} from 'react';

class FooterBar extends Component {
    render() {
        return (
            <footer className={"App-footerBlock"}>
                <div className={"App-upperFooter"}>
                    <div className={"App-upperFooterContact"}>
                        <p className={"App-upperFooterContactText"}>СВЯЗАТЬСЯ С НАМИ</p>
                        <div className={"App-upperFooterContactIcos"}>
                            <img src={require('../images/youtube 2.png')} className={"App-upperFooterContactIco"} />
                            <img src={require('../images/instagram 2.png')} className={"App-upperFooterContactIco"} />
                            <img src={require('../images/telegram 2.png')} className={"App-upperFooterContactIco"} />
                            <img src={require('../images/вк.png')} className={"App-upperFooterContactIco"} />
                        </div>
                        <p className={"App-upperFooterContactTextCopyright"}>Copyright © 2020 DreamCar Technology. Зарегистрированная торговая марка</p>
                    </div>
                    <div className={"App-bottomFooterTable"}>
                        <p className={"App-bottomFooterTableTitle"}>ИНФОРМАЦИЯ О МАГАЗИНЕ</p>
                        <p className={"App-bottomFooterTableText"}>Блог</p>
                        <p className={"App-bottomFooterTableText"}>Магазины</p>
                    </div>
                    <div className={"App-bottomFooterTable"}>
                        <p className={"App-bottomFooterTableTitle"}>ИНФОРМАЦИЯ</p>
                        <p className={"App-bottomFooterTableText"}>Оптовый прайс</p>
                        <p className={"App-bottomFooterTableText"}>Расчет материалов</p>
                        <p className={"App-bottomFooterTableText"}>Наша команда</p>
                        <p className={"App-bottomFooterTableText"}>Вакансии</p>
                    </div>
                    <div className={"App-bottomFooterTable"}>
                        <p className={"App-bottomFooterTableTitle"}>КЛИЕНТАМ</p>
                        <p className={"App-bottomFooterTableText"}>Аккаунт</p>
                        <p className={"App-bottomFooterTableText"}>Корзина</p>
                        <p className={"App-bottomFooterTableText"}>Стать партнером</p>
                    </div>
                    <div className={"App-bottomFooterTable"}>
                        <p className={"App-bottomFooterTableTitle"}>О КОМПАНИИ</p>
                        <p className={"App-bottomFooterTableText"}>О нас</p>
                        <p className={"App-bottomFooterTableText"}>Контакты</p>
                        <p className={"App-bottomFooterTableText"}>Политика обработки</p>
                        <p className={"App-bottomFooterTableText"}>Персональные данные</p>
                    </div>
                    <div className={"App-upperFooterEmailPhone"}>
                        <p className={"App-upperFooterEmail"}>admin@avto-dreamcar.ru</p>
                        <p className={"App-upperFooterPhone"}>+7-800-350-11-05</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterBar;