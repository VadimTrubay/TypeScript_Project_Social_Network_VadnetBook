import React from 'react'
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import { OnlineFriendsContainer } from './OnlineFriends/OnlineFriendsContainer'

export const Nav = React.memo(() => {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile/26782" className={s.navlink} activeClassName={s.navlinkActive}>Profile</NavLink>
            <NavLink to="/friends" className={s.navlink} activeClassName={s.navlinkActive}>Friends</NavLink>
            <NavLink to="/dialogs" className={s.navlink} activeClassName={s.navlinkActive}>Dialogs</NavLink>
            <NavLink to="/news" className={s.navlink} activeClassName={s.navlinkActive}>News</NavLink>
            <NavLink to="/music" className={s.navlink} activeClassName={s.navlinkActive}>Music</NavLink>
            <NavLink to="/settings" className={s.navlink} activeClassName={s.navlinkActive}>Settings</NavLink>
            <OnlineFriendsContainer />
        </nav>
    )
})