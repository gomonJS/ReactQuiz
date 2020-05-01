import React from 'react';
import classes from './Drawer.module.css';
import Fragment from "../../UI/Fragment/Fragment";
import Backdrop from "../../UI/Backdrop/Backdrop";

const linksNav = [
    1, 2, 3
]

export default class Drawer extends React.Component {

    onRenderLinksNav = () => {
        return linksNav.map((link, index) => {

            return (
                <li key={index}>
                    <a
                        onClick={this.props.onMenuClose}
                    >
                        {link} - Link
                    </a>
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