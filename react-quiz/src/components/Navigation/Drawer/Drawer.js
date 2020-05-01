import React from 'react';
import classes from './Drawer.module.css';
import Fragment from "../../UI/Fragment/Fragment";
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const linksNav = [
    {to: '/', label: 'Список тестов', exact: true},
    {to: '/quiz-creator', label: 'Добавить тест', exact: false},
    {to: '/auth', label: 'Авторизация', exact: false},
];

export default class Drawer extends React.Component {

    onRenderLinksNav = () => {
        return linksNav.map((link, index) => {

            return (
                <li key={index}>
                    <NavLink
                        onClick={this.props.onMenuClose}
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                    >
                        {link.label}
                    </NavLink>
                </li>
            );
        })
    }

    render() {

        const cls = [
            classes.Drawer
        ];

        if (!this.props.isOpen) cls.push(classes.close);

        return (
            <Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.onRenderLinksNav()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onMenuClose} /> : null}
            </Fragment>
        );
    }
}