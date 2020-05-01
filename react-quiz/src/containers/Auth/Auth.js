import React from 'react';
import classes from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends React.Component {

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form className={classes.AuthForm}>

                        <Input
                            label={'Email'}
                        />

                        <Button type={'success'} onClick={this.loginHandler}>Войти</Button>
                        <Button type={'primary'} onClick={this.regHandler}>Регистрация</Button>
                    </form>
                </div>
            </div>
        );
    }
}