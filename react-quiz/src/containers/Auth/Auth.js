import React from 'react';
import classes from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js';

export default class Auth extends React.Component {

    state = {

        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите правильный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите правильный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.onRenderInput()}

                        <Button
                            type={'success'}
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >Войти</Button>
                        <Button
                            type={'primary'}
                            onClick={this.regHandler}
                            disabled={!this.state.isFormValid}
                        >Регистрация</Button>
                    </form>
                </div>
            </div>
        );
    }

    loginHandler = () => {

    }

    regHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    }

    onRenderInput = () => {

        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    type={control.type}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={event => this.validationChange(event, controlName)}
                />
            );
        })
    }

    validationChange = (event, controlName) => {

        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]}

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        });

        this.setState({
            formControls: formControls,
            isFormValid: isFormValid
        });
    }

    validateControl = (value, validation) => {

        if (!validation) return true;

        let isValid = true;

        if (validation.required) isValid = value.trim() !== '' && isValid;

        if (validation.email) isValid = is.email(value) && isValid;

        if (validation.minLength) isValid = value.length >= validation.minLength && isValid;

        return isValid;
    }
}