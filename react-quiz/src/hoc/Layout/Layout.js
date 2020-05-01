import React from 'react';
import classes from './Layout.module.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

export default class Layout extends React.Component {

    state = {
        menu: false
    }

    onMenuClick = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    render() {
        return (
            <div className={classes.Layout}>

                <MenuToggle
                    isOpen={this.state.menu}
                    onMenuClick={this.onMenuClick}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}