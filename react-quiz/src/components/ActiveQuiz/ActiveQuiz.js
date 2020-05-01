import React from 'react';
import classes from './ActiveQuiz.module.css';
import Title from "../UI/Title/Title";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {

    return (
        <div className={classes.ActiveQuiz}>
            <div className={classes.Question}>

                <Title styleTitle={classes.Title}>{props.question}</Title>

                <span>Question id: {props.activeQuiz}</span>
                <small>{props.activeQuiz} from {props.quizLength}</small>

                <AnswerList
                    answers={props.answers}
                    onAnswerClick={props.onAnswerClick}
                />

            </div>
        </div>
    );
}

export default ActiveQuiz;