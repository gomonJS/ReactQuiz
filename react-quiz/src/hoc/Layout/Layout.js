import React from 'react';
import classes from './Layout.module.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

export default class Layout extends React.Component {

    state = {
        menu: false
    }

    onMenuClick = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    onMenuClose = () => {
        this.setState({
            menu: false
        });
    }

    render() {
        return (
            <div className={classes.Layout}>

                <MenuToggle
                    isOpen={this.state.menu}
                    onMenuClick={this.onMenuClick}
                />

                <Drawer
                    isOpen={this.state.menu}
                    onMenuClose={this.onMenuClose}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}