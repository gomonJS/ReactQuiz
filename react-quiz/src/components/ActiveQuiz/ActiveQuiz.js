import React from 'react';
import classes from './ActiveQuiz.module.css';
import Title from "../UI/Title/Title";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {

    return (
        <div className={classes.ActiveQuiz}>
            <div className={classes.Question}>

                <Title styleTitle={classes.Title}>Question</Title>

                <AnswerList/>

            </div>
        </div>
    );
}

export default ActiveQuiz;