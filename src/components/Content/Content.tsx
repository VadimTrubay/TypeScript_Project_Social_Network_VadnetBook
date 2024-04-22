import React from 'react'
import s from './Content.module.css'
import { ProfileContainer } from './Profile/ProfileContainer'
import { FriendsContainer } from './Friends/FriendsContainer'
//import { DialogsContainer } from './Dialogs/DialogsContainer'
import { DialogsStub } from './Dialogs/DialogsStub'
import { News } from './News/News'
import { Music } from './Music/Music'
import { Settings } from './Settings/Settings'
import { Redirect, Route } from 'react-router-dom'
import { LoginContainer } from './Login/Login'

export const Content = React.memo(() => {
    return (
        <div className={s.content}>
            <Route path={'/'}><Redirect to={'/profile/26782'} /></Route>
            <Route path={'/profile/:userId'} render={() => <ProfileContainer />}></Route>
            <Route path={'/friends'} render={() => <FriendsContainer />}></Route>
            <Route path={'/dialogs'} render={() => <DialogsStub />}></Route>
            <Route path={"/news"} render={() => <News />}></Route>
            <Route path={"/music"} render={() => <Music />}></Route>
            <Route path={"/settings"} render={() => <Settings />}></Route>
            <Route path={"/login"} render={() => <LoginContainer />}></Route>
        </div>

    )
})