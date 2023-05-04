import React, {Component} from 'react';
import {YMaps,Map} from "@pbe/react-yandex-maps";

class Contacts extends Component {
    render() {
        return (
            <div className={"App-contactsBody"}>
                <div className={"App-catalogMap"}>
                    <p className={"App-catalogMapTitel"}>КОНТАКТЫ</p>
                    <YMaps >
                        <Map defaultState={{center:[47.429160, 40.052654],zoom:18}} width={"500px"}/>
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
        );
    }
}

export default Contacts;