import React, { ChangeEvent, useState } from "react"
import s from './About.module.css'
import { ProfileType, updateProfileInfoTS } from '../../../../store/profile-reducer'
import { ProfileStatus } from './ProfileStatus'
import { ProfileInfoData } from "./ProfileInfoData"
import { ProfileInfoReduxForm, ProfileInfoReduxFormDataType } from "./ProfileInfoForm"
import { useDispatch } from "react-redux"
import { AppDispatchType } from "../../../../store/store"

type AboutPropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateProfileStatusTC: (status: string) => void
    updatePhotoTC: (photo: any) => void
}

export const About = React.memo((props: AboutPropsType) => {

    const dispatch = useDispatch<AppDispatchType>()

    const [editMode, setEditMode] = useState<boolean>(false)

    const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.updatePhotoTC(e.target.files[0])
        }
    }

    const onSubmit = (profileInfoFormData: ProfileInfoReduxFormDataType) => {
        dispatch(updateProfileInfoTS(profileInfoFormData))
        setEditMode(false)

    }
    const initialFormValues: Partial<ProfileInfoReduxFormDataType> = {
        fullName: props.profile.fullName ? props.profile.fullName : '',
        aboutMe: props.profile.aboutMe ? props.profile.aboutMe : '',
        lookingForAJob: props.profile.lookingForAJob ? "yes" : "no",
        lookingForAJobDescription: props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : '',
        contacts: props.profile.contacts.website ? props.profile.contacts.website : ''
    }

    return (
        <div className={s.about}>
            <div className={s.photoContainer}>
                <img className={s.photo} src={props.profile.photos.large || 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="avatar" />
                {props.isOwner && <input type={'file'} className={s.changePhotoInput} onChange={changePhoto} />}
            </div>
            <div className={s.description}>
                <ProfileStatus status={props.status} updateProfileStatusTC={props.updateProfileStatusTC} />
                {editMode
                    ? <ProfileInfoReduxForm initialValues={initialFormValues} onSubmit={onSubmit} />
                    : <ProfileInfoData isOwner={props.isOwner} profile={props.profile} activateEditMode={() => { setEditMode(true) }} />
                }
            </div>
        </div>
    )
})