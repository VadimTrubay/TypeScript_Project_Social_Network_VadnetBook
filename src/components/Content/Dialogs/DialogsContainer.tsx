import React, { ComponentType } from "react"
import s from "./Dialogs.module.css"
import {
    addNewMessageAC,
    DialogsActionsType,
    MessageType,
    UserType
} from '../../../store/dialogs-reducer'
import { AppStateType } from '../../../store/store'
import { connect } from 'react-redux'
import { Users } from './Users/Users'
import { Messages } from './Messages/Messages'
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"
import { getMessages, getUsers } from "../../../selectors/dialogs-selectors"

type DialogsPropsType = {
    usersData: Array<UserType>
    messagesData: Array<MessageType>
    sendNewMessage(newMessage: string): void
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.messages}>
            <Users usersData={props.usersData} />
            <Messages messagesData={props.messagesData} sendNewMessage={props.sendNewMessage} />
        </div>
    )
}

type mapStateToPropsType = {
    usersData: Array<UserType>
    messagesData: Array<MessageType>
}
type mapDispatchToPropsType = {
    sendNewMessage(newMessage: string): void
}

function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        usersData: getUsers(state),
        messagesData: getMessages(state),
    }
}
function mapDispatchToProps(dispatch: (AC: DialogsActionsType) => void): mapDispatchToPropsType {
    return {
        sendNewMessage: (newMessage: string) => {
            dispatch(addNewMessageAC(newMessage))
        },
    }
}

/* const DialogsWithAuthRedirectContainer = withAuthRedirect(Dialogs as ComponentType)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirectContainer) */

//равнозначные записи выше и ниже

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs as ComponentType)