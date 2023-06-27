import React, {Component} from 'react';

function vkRedirect() {
    window.open("https://vk.com/dcteco")
}

class Footer extends Component {
    render() {
        return (
            <footer className={"app-footerMain"} id={"footer"}>
                <div className={"app-footerfirstColumn"}>
                    <p className={"app-bodyServicesFirstColumnItemText"}>Наши контакты:</p>
                    <div className={"app-footerContactsitem"} onClick={vkRedirect}>
                        <img src={require("../images/vk 1.png")}/>
                        <p className={"app-bodyServicesFirstColumnItemText"}>Мы в вк!</p>
                    </div>
                    <div className={"app-footerContactsitem"}>
                        <img src={require("../images/telegram 1.png")}/>
                        <p className={"app-bodyServicesFirstColumnItemText"}>Мы в Телеграм!</p>
                    </div>
                </div>
                <div className={"app-footerSecondColumn"}>
                    <div className={"app-footerContactsitem"}>
                        <img src={require("../images/telephone-call 1.png")}/>
                        <p className={"app-bodyServicesFirstColumnItemText"}>+7-963-299-21-71</p>
                    </div>
                    <div className={"app-footerContactsitem"}>
                        <img src={require("../images/email (2) 1.png")}/>
                        <p className={"app-bodyServicesFirstColumnItemText"}>dctpro@mail.ru</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;