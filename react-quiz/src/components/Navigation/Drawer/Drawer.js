import React from 'react';
import classes from './Drawer.module.css';

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
            <nav className={cls.join(' ')}>
                <ul>
                    {this.onRenderLinksNav()}
                </ul>
            </nav>
        );
    }
}