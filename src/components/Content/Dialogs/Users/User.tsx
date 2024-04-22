import React from "react"
import s from "./User.module.css"
import { NavLink } from "react-router-dom"
import { UserType } from '../../../../store/dialogs-reducer'

export const User = React.memo((props: UserType) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={s.navlink} activeClassName={s.navlinkActive}>
            <img src={props.ava} alt="ava" className={s.ava} />
            {props.name}
        </NavLink>
    )
})