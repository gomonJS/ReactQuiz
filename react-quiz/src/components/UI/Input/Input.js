import React from 'react';
import classes from './Input.module.css';

const isInvalid = ({valid, touched, shouldValidate}) => !valid && touched && shouldValidate;

const Input = props => {

    const cls = [classes.Input];
    const inputType = props.type || 'text';
    const htmlFor = inputType + '_' + Math.random();

    if (isInvalid(props)) cls.push(classes.invalid);

    return (
        <div className={cls.join(' ')}>
            <label
                htmlFor={htmlFor}
            >
                {props.label}
            </label>

            <input
                id={htmlFor}
                type="text"
                value={props.value}
                onChange={props.onChange}
            />

            {isInvalid(props) ?
                <span>{props.errorMessage || 'Введите корректные данные'}</span> : null}
        </div>
    );
}

export default Input;