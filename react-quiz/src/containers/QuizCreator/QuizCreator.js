import React from 'react';
import classes from './QuizCreator.module.css';
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import {createControl} from '../../form/formFramework';
import Input from "../../components/UI/Input/Input";
import Fragment from "../../components/UI/Fragment/Fragment";

const createOptionControl = number => {
    return createControl({
        label: `Вопрос ${number}`,
        errorMessage: 'Поле не может быть пустым',
        id: number
    }, {required: true})
}

const createFormControls = () => {
    return {
        question: createControl({
            label: 'Введите вопрос', errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends React.Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <Title styleTitle={classes.Title}>Создание тестов</Title>

                    <form onSubmit={this.submitHandler}>

                        {this.renderControls()}

                        <select></select>

                        <Button
                            type={'primary'}
                            onClick={this.addQuestionHandler}>Добавить вопрос</Button>
                        <Button
                            type={'success'}
                            onClick={this.createHandler}>Создать тест</Button>
                    </form>
                </div>
            </div>
        );
    }

    addQuestionHandler = () => {

    }

    createHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    }

    renderControls = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Fragment>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </Fragment>
            );
        })
    }

    changeHandler = (value, controlName) => {

    }
}