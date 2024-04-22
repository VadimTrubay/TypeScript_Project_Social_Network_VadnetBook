import React from 'react'
import s from './ValidatedForms.module.css'

export const Input = React.memo((props: any) => {
    return (
        <div>
            <input
                {...props.input}
                className={props.meta.touched && props.meta.error ? props.className + ' ' + s.formWithError : props.className}
                placeholder={props.placeholder}
                type={props.type}
            />
            {props.meta.touched && props.meta.error && <span className={s.spanError}> {props.meta.error}</span>}
        </div>
    )
})

export const Textarea = React.memo((props: any) => {
    return (
        <div>
            <textarea
                {...props.input}
                className={props.meta.touched && props.meta.error ? props.className + ' ' + s.formWithError : props.className + ' ' + s.form}
                placeholder={props.placeholder}
                type={props.type}
            />
            {props.meta.touched && props.meta.error && <span className={s.spanError}> {props.meta.error}</span>}
        </div>
    )
})