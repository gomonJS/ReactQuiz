import React from 'react';
import classes from './AnswerList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = props => {

    return (
        <ul className={classes.AnswerList}>
            <AnswerItem/>
        </ul>
    );
}

export default AnswerList;