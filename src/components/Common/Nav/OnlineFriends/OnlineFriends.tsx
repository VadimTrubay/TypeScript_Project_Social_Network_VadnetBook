import React from "react"
import s from './OnlineFriends.module.css'
import { OnlineFriend } from "./OnlineFriend"
import { OnlineFriendType } from '../../../../store/navbar-reducer'


type OnlineFriendsPropsType = {
    onlineFriendsData: Array<OnlineFriendType>
}

export const OnlineFriends = React.memo((props: OnlineFriendsPropsType) => {

    const onlineFriends = props.onlineFriendsData.map((el) => <OnlineFriend key={el.id} id={el.id} name={el.name} ava={el.ava} />)

    return (
        <div className={s.onlineFriends}>{onlineFriends}</div>
    )
})