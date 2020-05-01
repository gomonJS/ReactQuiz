import React from 'react';
import classes from './Auth.module.css';

export default class Auth extends React.Component {

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                </div>
            </div>
        );
    }
}