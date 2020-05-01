import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends React.Component {

    state = {

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

                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuiz].answers}
                        question={this.state.quiz[this.state.activeQuiz].question}
                        activeQuiz={this.state.activeQuiz + 1}
                        quizLength={this.state.quiz.length}
                        onAnswerClick={this.onAnswerClickHandler}
                        answerState={this.state.answerState}
                    />

                </div>
            </div>
        );
    }

    onAnswerClickHandler = answerId => {

        const question = this.state.quiz[this.state.activeQuiz];

        if (question.answerRightId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timer = window.setTimeout(() => {

                if (this.isFinished()) {
                    console.log('Finished!');
                } else {
                    this.setState({
                        activeQuiz: this.state.activeQuiz + 1
                    });
                }
                window.clearTimeout(timer);
            }, 900);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }

    isFinished = () => this.state.activeQuiz + 1 === this.state.quiz.length;

}