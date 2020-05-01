import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends React.Component {

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                    <ActiveQuiz/>

                </div>
            </div>
        );
    }
}