import React from "react"
import s from "./Users.module.css"
import { User } from "./User"
import { UserType } from '../../../../store/dialogs-reducer'

type UsersPropsData = {
    usersData: Array<UserType>
}

export const Users = React.memo((props: UsersPropsData) => {
    return <div className={s.users}>{props.usersData.map((el) => <User key={el.id} id={el.id} name={el.name} ava={el.ava} />)}</div>
})