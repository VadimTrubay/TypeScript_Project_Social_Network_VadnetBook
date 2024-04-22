import React from "react"
import s from './About.module.css'
import { ProfileType } from '../../../../store/profile-reducer'

type ProfileInfoPropsType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

export const ProfileInfoData = React.memo((props: ProfileInfoPropsType) => {

    return (
        <div className={s.description}>
            <div className={s.info}>Full name: {props.profile.fullName}</div>
            <div className={s.info}>About me: {props.profile.aboutMe}</div>
            <div className={s.info}>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            <div className={s.info}>My main skills: {props.profile.lookingForAJobDescription}</div>
            <div className={s.info}>Contacts: <a href={props.profile.contacts.website ? props.profile.contacts.website : ''}>click me</a></div>
            {props.isOwner && <button className={s.infoButton} onClick={props.activateEditMode}>Edit info</button>}
        </div>
    )
})