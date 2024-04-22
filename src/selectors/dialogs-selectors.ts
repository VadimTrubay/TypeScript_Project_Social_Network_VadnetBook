import { MessageType, UserType } from "../store/dialogs-reducer"
import { AppStateType } from "../store/store"

export function getUsers(state: AppStateType):Array<UserType> {
    return state.dialogsPage.usersData
}
export function getMessages(state: AppStateType):Array<MessageType> {
    return state.dialogsPage.messagesData
}