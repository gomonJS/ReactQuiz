import React from 'react';
import classes from './FinishedQuiz.module.css';
import Title from "../UI/Title/Title";

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {

        if (props.results[key] === 'success') total++;
        return total;
    }, 0);

    return (
        <div className={classes.FinishedQuiz}>

            <Title styleTitle={classes.Title}>Правильных ответов: {successCount}</Title>

            <ul>
                {
                    props.quiz.map((quiz, index) => {

                        const cls = [
                            'fa',
                            props.results[quiz.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.results[quiz.id]]
                        ];

                        return (
                            <li key={index}>
                                <span>{index + 1}. {quiz.question}</span>
                                <i className={cls.join(' ')} />
                            </li>
                        );
                    })
                }
            </ul>

            <p>Answer right: {successCount} from {props.quiz.length}</p>

            <div>
                <button>Retry</button>
            </div>

        </div>
    );
}

export default FinishedQuiz;