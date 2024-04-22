import React from "react"
import s from "./Message.module.css"
import { MessageType } from "../../../../store/dialogs-reducer"

export const Message = React.memo((props: MessageType) => {
    return (
        <div className={s.text}>
            <div id={`${props.id}`}>{props.message}</div>
        </div>
    )
})