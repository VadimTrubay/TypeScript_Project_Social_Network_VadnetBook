import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input } from "../../../Common/ValidatedForms/ValidatedForms"
import s from './About.module.css'

export type ProfileInfoReduxFormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: string
    lookingForAJobDescription: string
    contacts: string
}

const ProfileInfoForm = React.memo((props: any) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.description}>
            <div className={s.info}>Full name:  <Field name={'fullName'} component={Input} placeholder={'full name'} /></div>
            <div className={s.info}>About me: <Field name={'aboutMe'} component={Input} placeholder={'about me'} /></div>
            <div className={s.info}>Looking for a job: <Field name={'lookingForAJob'} component={Input} placeholder={'only "yes" or "no"'} /></div>
            <div className={s.info}>My main skills: <Field name={'lookingForAJobDescription'} component={Input} placeholder={'main skills'} /></div>
            <div className={s.info}>Contacts: <Field name={'contacts'} component={Input} placeholder={'contacts'} /></div>
            <button className={s.infoButton} onClick={() => { }}>Save info</button>
        </form>
    )
})

export const ProfileInfoReduxForm = reduxForm<ProfileInfoReduxFormDataType>({ form: 'profileInfo' })(ProfileInfoForm)