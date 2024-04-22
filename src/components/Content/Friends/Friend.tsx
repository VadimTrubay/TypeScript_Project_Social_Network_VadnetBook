import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Friend.module.css"

type FriendPropsType = {
    id: string,
    name: string,
    photo: string,
    status: string,
    followed: boolean,
    disabledButtons: Array<string>
    createFollow(): void,
    deleteFollow(): void,
}

export const Friend = React.memo((props: FriendPropsType) => {
    return (
        <div className={s.friend}>
            <div className={s.photoButton}>
                <NavLink to={'/profile/' + props.id} activeClassName={s.photo}><img className={s.photo} src={props.photo ? props.photo : 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="photoUser" /></NavLink>
                {props.followed
                    ?
                    <button
                        disabled={props.disabledButtons.some(el => el === props.id)}
                        onClick={props.deleteFollow}
                        className={props.disabledButtons.some(el => el === props.id) ? `${s.button} ${s.disabled}` : `${s.button} ${s.buttonUnfollow}`}>Unfollow
                    </button>
                    :
                    <button
                        disabled={props.disabledButtons.some(el => el === props.id)}
                        onClick={props.createFollow}
                        className={props.disabledButtons.some(el => el === props.id) ? `${s.button} ${s.disabled}` : `${s.button} ${s.buttonFollow}`}>Follow
                    </button>
                }
            </div>
            <div className={s.description}>
                <div className={s.nameStatus}>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                <div className={s.location}>
                    <div>{'country'}</div>
                    <div>{'city'}</div>
                </div>
            </div>

        </div>
    )
})