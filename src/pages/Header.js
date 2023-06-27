import React, {Component} from 'react';

function bridgeToGoogle() {
    window.open("https://forms.gle/WjZL2pBLRNFiqaNE7")
}

class Header extends Component {
    render() {
        return (
            <header className={"app-headerMain"}>
                <img src={require("../images/logoDctEco.png")} className={"app-headerIco"}/>
                <div className={"app-menuSelectors"}>
                    <a className={"app-menuSelector"} href={"#materailsDesk"}>Материалы</a>
                    <a className={"app-menuSelector"} href={"#calculate"}>Калькулятор</a>
                    <a className={"app-menuSelector"} href={"#footer"}>Контакты</a>
                </div>
                <div className={"app-menuGetPartner"}>
                    <p onClick={bridgeToGoogle}>Партнерам</p>
                </div>
            </header>
        );
    }
}

export default Header;