import React, { useState } from "react"
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom'

export type HeaderPropsType = {
    login: string
    isAuth: boolean
    logoutUserTC: () => void
}

export const Header = React.memo((props: HeaderPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    function logout() {
        setEditMode(false)
        props.logoutUserTC()

    }

    return (
        <header className={s.header}>
            <div className={s.title}>Social Network</div>
            {
                props.isAuth && !editMode ? <span className={s.login} onClick={() => { setEditMode(true) }}>{props.login}</span>
                    : props.isAuth && editMode ? <span className={s.login} onClick={logout}>Exit</span>
                        : <NavLink to={'/login'} className={s.login}>Login</NavLink>
            }
        </header>
    )
})