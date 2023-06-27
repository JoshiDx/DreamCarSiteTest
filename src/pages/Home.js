import React from 'react';


function addFunc() {
    let material = document.getElementById("material").value
    let amount = document.getElementById("value").value
    document.secondColumn = document.getElementById("secondColumn")
    let itogLine = document.itogLine = document.getElementById("itogLine")

    let kvm = 0.34;
    let cost = 0;

    if(material == "Виброизоляция DCT ECO Vibra 1.5 мм"){
        cost = 180
    }
    else if(material == "Виброизоляция DCT ECO Vibra 2 мм"){
        cost = 200
    }
    else if(material == "Виброизоляция DCT ECO Vibra 3 мм"){
        cost = 230
    }
    else if(material == "Виброизоляция DCT ECO Vibra 4 мм"){
        cost = 260
    }
    else if(material == "Шумоизоляция DCT ECO Best 5 мм"){
        cost = 300
    }
    else if(material == "Шумоизоляция DCT ECO Best 7 мм"){
        cost = 350
    }
    else if(material == "Звукопоглотитель DCT ECO Scrunch 10 мм"){
        cost = 600
    }
    else if(material == "Звукопоглотитель DCT ECO Scrunch Wave 15 мм"){
        cost = 500
    }

    let itog = cost * amount;
    let obshKvm = kvm * amount;
    let count = 1;

    let num = Number(sessionStorage.getItem('oldCena'))
    let cenaItog = num + itog

    sessionStorage.setItem('oldCena',cenaItog)

    if(count != 0){
        itogLine.innerText = `Итог: ${cenaItog} ₽`;
    }

    let div = document.createElement('div');
    div.className = "app-bodyServicesSecondColumnItem";
    div.innerHTML = "<div></div>";
    div.innerHTML = `${material}<br>Листов: ${amount}<br>КВм: ${obshKvm}</br>Итог по позиции: ${itog} ₽`;

    document.secondColumn.append(div);
}

export default function Home() {
    return(
        <body className={"app-bodyHome"}>
            <div className={"app-bodyGoodsArea"} id={"materailsDesk"}>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Виброизоляция DCT ECO Vibra 1.5 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Виброизоляция DCT ECO Vibra 1.5 мм - легкий и эластичный вибропоглощающий материал, мастика с фольгированным покрытием. Как правило, используется для обработки крыши, двери, крышка капота и багажника, пластиковые подкрылки.
                            <br/> <br/> <br/> Цена: 180 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Виброизоляция DCT ECO Vibra 2 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Виброизоляция DCT ECO Vibra 2 мм - легкий и эластичный вибропоглощающий материал, мастика с фольгированным покрытием. Как правило, используется для обработки крыши, двери, крышка капота и багажника, пластиковые подкрылки.
                            <br/> <br/> <br/> Цена: 200 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Виброизоляция DCT ECO Vibra 3 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Виброизоляция DCT ECO Vibra 3 мм - эластичный вибропоглощающий материал, мастика с фольгированным покрытием. Как правило, используется для обработки пола салона, пола багажника и дверей.
                            <br/> <br/> <br/> <br/> <br/>Цена: 230 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Виброизоляция DCT ECO Vibra 4 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Виброизоляция DCT ECO Vibra 4 мм - эластичный вибропоглощающий материал, мастика с фольгированным покрытием. Как правило, используется для обработки щитка моторного отсека и колесных арок.
                            <br/> <br/> <br/> <br/> <br/>Цена: 260 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Шумоизоляция DCT ECO Best 5 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Шумоизоляция DCT ECO Best 5 мм - обеспечивает звукоизоляцию до 24 дБ. Влагозащищенное исполнение. DCT ECO Best – единственный облегченный мембранный материал, разработанный специально для обработки крыши, двери, крышка капота и багажника, пластиковые подкрылки автомобиля.
                            <br/> <br/> Цена: 300 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Шумоизоляция DCT ECO Best 7 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Шумоизоляция DCT ECO Best 7 мм - обеспечивает звукоизоляцию до 24 дБ. Влагозащищенное исполнение. DCT ECO Best – единственный облегченный мембранный материал, разработанный специально для обработки крыши, двери, крышка капота и багажника, пластиковые подкрылки автомобиля.
                            <br/> <br/> Цена: 300 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Шумоизоляция DCT ECO Best 7 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Шумоизоляция DCT ECO Best 7 мм - обеспечивает звукоизоляцию до 24 дБ. Влагозащищенное исполнение. DCT ECO Best – единственный облегченный мембранный материал, разработанный специально для обработки крыши, двери, крышка капота и багажника, пластиковые подкрылки автомобиля.
                            <br/> <br/> Цена: 350 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Звукопоглотитель DCT ECO Scrunch 10 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Звукопоглотитель DCT ECO Scrunch 10 мм - Материал применяется для устранения скрипов панелей салона автомобиля, путем проклейки между декоративными элементами и кузовом автомобиля.  Предназначен для повышения акустической комфортности в кабине транспортных средств и пассажирском салоне.
                            <br/> <br/> Цена: 350 ₽
                        </p>
                    </div>
                </div>
                <div className={"app-bodyGoods"}>
                    <img src={require("../images/not_found.png")} className={"app-goodImg"}/>
                    <div className={"app-goodsDescriptionBlock"}>
                        <p className={"app-goodsDescriptionTitle"}>
                            Звукопоглотитель DCT ECO Scrunch Wave 15 мм
                        </p>
                        <p className={"app-goodsDescription"}>
                            Звукопоглотитель DCT ECO Scrunch Wave 15 мм - Материал применяется для устранения скрипов панелей салона автомобиля, путем проклейки между декоративными элементами и кузовом автомобиля.  Предназначен для повышения акустической комфортности в кабине транспортных средств и пассажирском салоне.
                            <br/> <br/> Цена: 350 ₽
                        </p>
                    </div>
                </div>
            </div>
            <div className={"app-bodyServices"} id={"calculate"}>
                <div className={"app-bodyServicesFirstColumn"}>
                    <p className={"app-bodyServicesFirstColumnTitle"}>
                        Калькулятор
                    </p>
                    <div className={"app-bodyServicesFirstColumnItem"}>
                        <p className={"app-bodyServicesFirstColumnItemText"}>Материал:</p>
                        <select className={"app-bodyServicesSelection"} placeholder={"Выберите товар"} id={"material"}>
                            <optgroup label={"Виброизоляция:"} className={"app-bodyServicesSelectionGroup"}>
                                <option className={"app-bodyServicesSelectionOpt"}>Виброизоляция DCT ECO Vibra 1.5 мм</option>
                                <option className={"app-bodyServicesSelectionOpt"}>Виброизоляция DCT ECO Vibra 2 мм</option>
                                <option className={"app-bodyServicesSelectionOpt"}>Виброизоляция DCT ECO Vibra 3 мм</option>
                                <option className={"app-bodyServicesSelectionOpt"}>Виброизоляция DCT ECO Vibra 4 мм</option>
                            </optgroup>
                            <optgroup label={"Шумоизоляция:"} className={"app-bodyServicesSelectionGroup"}>
                                <option className={"app-bodyServicesSelectionOpt"}>Шумоизоляция DCT ECO Best 5 мм</option>
                                <option className={"app-bodyServicesSelectionOpt"}>Шумоизоляция DCT ECO Best 7 мм</option>
                            </optgroup>
                            <optgroup label={"Звукопоглотители:"} className={"app-bodyServicesSelectionGroup"}>
                                <option className={"app-bodyServicesSelectionOpt"}>Звукопоглотитель DCT ECO Scrunch 10 мм</option>
                                <option className={"app-bodyServicesSelectionOpt"}>Звукопоглотитель DCT ECO Scrunch Wave 15 мм</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className={"app-bodyServicesFirstColumnItem"}>
                        <p className={"app-bodyServicesFirstColumnItemText"}>Колличество:</p>
                        <input type={"text"} className={"app-bodyServicesSelectionCount"} id={"value"}/>
                        <p className={"app-bodyServicesFirstColumnItemText"}>(в листах)</p>
                    </div>
                    <input type={"button"} value={"Добавить в итог"} className={"app-bodyServicesGetGood"} onClick={addFunc}/>
                </div>
                <div className={"app-bodyServicesSecondColumn"} id={"secondColumn"}>
                    <p className={"app-bodyServicesSecondColumnTitle"} id={"itogLine"}>Итог:</p>
                </div>
            </div>
        </body>
    );
}