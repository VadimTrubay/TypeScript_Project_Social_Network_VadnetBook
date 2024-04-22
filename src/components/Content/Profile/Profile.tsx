import React from "react"
import s from './Profile.module.css'
import { About } from './About/About'
import { NewPostContainer } from './NewPost/NewPostContainer'
import { PostsContainer } from './Posts/PostsContainer'
import { Preloader } from '../../Common/Preloader/Preloader'
import { ProfileType } from '../../../store/profile-reducer'

type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateProfileStatusTC: (status: string) => void
    updatePhotoTC: (photo: any) => void
}

export const Profile = React.memo((props: ProfilePropsType) => {
    return !props.profile ? <Preloader /> :
        <div className={s.profile}>
            <About
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateProfileStatusTC={props.updateProfileStatusTC}
                updatePhotoTC={props.updatePhotoTC}
            />
            <NewPostContainer />
            <PostsContainer />
        </div>
})