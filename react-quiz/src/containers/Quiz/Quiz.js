import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends React.Component {

    state = {

        quiz: [
            {
                id: 1,
                answerRightId: 1,
                question: 'Question 1',
                answers: [
                    {text: 'answer 1', id: 1},
                    {text: 'answer 2', id: 2},
                    {text: 'answer 3', id: 3},
                ]
            },
            {
                id: 2,
                answerRightId: 2,
                question: 'Question 2',
                answers: [
                    {text: 'answer 1', id: 1},
                    {text: 'answer 2', id: 2},
                    {text: 'answer 3', id: 3},
                ]
            }
        ]
    }

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