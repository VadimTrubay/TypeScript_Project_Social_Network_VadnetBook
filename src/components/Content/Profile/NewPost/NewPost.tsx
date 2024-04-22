import React from 'react'
import s from './NewPost.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../../Common/ValidatedForms/ValidatedForms'
import { maxLengthVC } from '../../../../validators/validators'

//form

const maxLength = maxLengthVC(10)

type NewPostReduxFormDatatype = {
    newPost: string
}

const newPostForm = React.memo((props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.new}>
            <Field
                className={s.input}
                component={Input}
                name={'newPost'}
                placeholder={'Enter a post message'}
                validate={[maxLength]}
            />
            <button className={s.button}>Add post</button>
        </form>
    )
})

const NewPostReduxForm = reduxForm<NewPostReduxFormDatatype>({ form: 'newPost' })(newPostForm)

//new post

type NewPostPropsType = {
    addNewPost(newPostText: string): void,
}

export const NewPost = React.memo((props: NewPostPropsType) => {

    function onAddNewPost(newPostFormData: NewPostReduxFormDatatype): void {
        if (newPostFormData.newPost !== '') {
            props.addNewPost(newPostFormData.newPost)
        }
    }

    return <NewPostReduxForm onSubmit={onAddNewPost} />
})