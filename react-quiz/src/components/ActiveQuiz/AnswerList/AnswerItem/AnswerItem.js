import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = props => {

    const cls = [
        classes.AnswerItem
    ];

    if (props.answerState) cls.push(classes[props.answerState]);

    return (
        <li
            onClick={() => props.onAnswerClick(props.answer.id)}
            className={cls.join(' ')}>
            {props.answer.text}
        </li>
    );
}

export default AnswerItem;