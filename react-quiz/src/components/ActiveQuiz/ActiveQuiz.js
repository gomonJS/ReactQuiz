import React from 'react';
import classes from './ActiveQuiz.module.css';
import Title from "../UI/Title/Title";

const ActiveQuiz = props => {

    return (
        <div className={classes.ActiveQuiz}>
            <div className={classes.Question}>
                <Title styleTitle={classes.Title}>Question</Title>
            </div>
        </div>
    );
}

export default ActiveQuiz;