import React, {Component} from 'react';

class RegestrationLogin extends Component {
    render() {
        return (
            <div className={"App-regBody"}>
                <div className={"App-regPlate"}>
                    <div className={"App-regSelector"}>
                        <span className={"App-regSelectorText"}>Войти</span>
                        <span className={"App-regSelectorText"}>Регистрация</span>
                    </div>
                    <div className={"App-regInputs"}>
                        <input type={"text"} className={"App-regInputText"} placeholder={"Логин"}/>
                        <input type={"text"} className={"App-regInputText"} placeholder={"Пароль"}/>
                    </div>
                    <span className={"App-regRecov"}>Забыли пароль?</span>
                    <div className={"App-regButton"}>Войти</div>
                </div>
            </div>
        );
    }
}

export default RegestrationLogin;