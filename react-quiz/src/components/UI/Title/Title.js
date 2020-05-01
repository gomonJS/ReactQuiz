import React from 'react';
import classes from './Title.module.css';

const Title = props => {

    const cls = [
        classes.Title,
        props.styleTitle
    ]

    return (
        <h1 className={cls.join(' ')}>
            {props.children}
        </h1>
    );
}

export default Title;