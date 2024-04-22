import React from 'react'
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../../validators/validators'
import { Input } from '../../Common/ValidatedForms/ValidatedForms'
import { loginUserTC } from '../../../store/auth-reducer'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../store/store'
import { Redirect } from 'react-router-dom'

//form

type LoginReduxFormDataType = {
    email: string
    password: string
    remember: boolean
}

const LoginForm = React.memo((props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field name={'email'} component={Input} placeholder={'email'} validate={[requiredField]} />
            </div>
            <div>
                <Field name={'password'} component={Input} type={'password'} placeholder={'password'} validate={[requiredField]} />
            </div>
            <div className={s.checkbox}>
                <Field name={'remember'} component={'input'} type={'checkbox'} /> remember
                <button className={s.button}>Submit</button>
            </div>
            <div className={s.formError}>{props.error}</div>
        </form>
    )
})

const LoginReduxForm = reduxForm<LoginReduxFormDataType>({ form: 'login' })(LoginForm)

//login page

const Login = React.memo((props: any) => {

    const isLogin = useSelector<AppStateType, boolean>(st => st.auth.isAuth)

    function onSubmit(loginFormData: LoginReduxFormDataType): void {
        props.loginUserTC(loginFormData.email, loginFormData.password, loginFormData.remember)
    }

    if (isLogin) {
        return <Redirect to={'/profile/26782'} />
    }

    return (
        <div className={s.login}>
            <div className={s.header}>Login please</div>
            <LoginReduxForm onSubmit={onSubmit} />
            <div className={s.testData}>
                Email: free@samuraijs.com <br />
                Password: free
            </div>
        </div>
    )
})

export const LoginContainer = connect(null, { loginUserTC })(Login)