import React, {Component} from 'react';

class Catalog extends Component {
    render() {
        return (
            <div className={"App-catalogBody"}>
                <div className={"App-bodyCatalogFilters"}>
                    <div className={"App-bodyCatalogFiltersList"}>
                        <p className={"App-bodyCatalogFiltersTitle"}>Сортировать по:</p>
                        <p className={"App-bodyCatalogFiltersListFilters"}>Фильтры не пременены</p>
                    </div>
                    <div className={"App-bodyCatalogFiltersCategory"}>
                        <div className={"App-bodyCatalogFiltersCategoryTitle"}>
                            <p className={"App-bodyCatalogFiltersCategoryTitleText"}>Подкатегории</p>
                            <img src={require("../images/plus.png")} className={"App-bodyCatalogFiltersCategoryTitleIco"}/>
                        </div>
                    </div>
                    <div className={"App-bodyCatalogFiltersCategory"}>
                        <div className={"App-bodyCatalogFiltersCategoryTitle"}>
                            <p className={"App-bodyCatalogFiltersCategoryTitleText"}>Бренд</p>
                            <img src={require("../images/plus.png")} className={"App-bodyCatalogFiltersCategoryTitleIco"}/>
                        </div>
                    </div>
                    <div className={"App-bodyCatalogFiltersCategory"}>
                        <div className={"App-bodyCatalogFiltersCategoryTitle"}>
                            <p className={"App-bodyCatalogFiltersCategoryTitleText"}>Размер листа</p>
                            <img src={require("../images/plus.png")} className={"App-bodyCatalogFiltersCategoryTitleIco"}/>
                        </div>
                    </div>
                    <div className={"App-bodyCatalogFiltersCategory"}>
                        <div className={"App-bodyCatalogFiltersCategoryTitle"}>
                            <p className={"App-bodyCatalogFiltersCategoryTitleText"}>Цена</p>
                            <img src={require("../images/plus.png")} className={"App-bodyCatalogFiltersCategoryTitleIco"}/>
                        </div>
                    </div>
                    <div className={"App-bodyCatalogFiltersCategory"}>
                        <div className={"App-bodyCatalogFiltersCategoryTitle"}>
                            <p className={"App-bodyCatalogFiltersCategoryTitleText"}>Рейтинг</p>
                            <img src={require("../images/plus.png")} className={"App-bodyCatalogFiltersCategoryTitleIco"}/>
                        </div>
                    </div>
                    <div className={"App-bodyCatalogFiltersCategory"}>
                        <div className={"App-bodyCatalogFiltersCategoryFromTo"}>
                            <input type={"text"} placeholder={"От"} className={"App-bodyCatalogFiltersCategoryFromToAreas"}/>
                            <input type={"text"} placeholder={"До"} className={"App-bodyCatalogFiltersCategoryFromToAreas"}/>
                        </div>
                        <div className={"App-bodyCatalogFiltersCategoryFromToButton"}>
                            <p className={"App-bodyCatalogFiltersCategoryFromToButtonText"}>ПОИСК</p>
                        </div>
                    </div>
                </div>
                <div className={"App-bodyCatalogGoods"}>

                </div>
            </div>
        );
    }
}

export default Catalog;