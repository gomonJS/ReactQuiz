import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

export default class Quiz extends React.Component {

    state = {

        results: {},
        isFinished: false,
        answerState: null,
        activeQuiz: 0,
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

                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                quiz={this.state.quiz}
                                results={this.state.results}
                                onRetryButtonHandler={this.onRetryButtonHandler}
                            /> :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuiz].answers}
                                question={this.state.quiz[this.state.activeQuiz].question}
                                activeQuiz={this.state.activeQuiz + 1}
                                quizLength={this.state.quiz.length}
                                onAnswerClick={this.onAnswerClickHandler}
                                answerState={this.state.answerState}
                            />
                    }

                </div>
            </div>
        );
    }

    onAnswerClickHandler = answerId => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') return;
        }

        const question = this.state.quiz[this.state.activeQuiz];
        const results = this.state.results;

        if (question.answerRightId === answerId) {

            if (!results[question.id]) results[question.id] = 'success';

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            });

            const timer = window.setTimeout(() => {

                if (this.isFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuiz: this.state.activeQuiz + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timer);
            }, 900);
        } else {
            results[question.id] = 'error';

            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            });
        }
    }

    isFinished = () => this.state.activeQuiz + 1 === this.state.quiz.length;

    onRetryButtonHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            answerState: null,
            activeQuiz: 0,
        });
    }
}