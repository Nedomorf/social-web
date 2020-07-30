import React from "react";
import style from './FormsFields.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formField} ${hasError ? style.error : ""}`}>
            { hasError && <div>{meta.error}</div> }
            <textarea {...input} {...props} />
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formField} ${hasError ? style.error : ""}`}>
            { hasError && <div>{meta.error}</div> }
            <input {...input} {...props} />
        </div>
    )
}