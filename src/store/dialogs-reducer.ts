import { v1 } from 'uuid'

//constants
const ADD_NEW_MESSAGE = 'DIALOGS/ADD-NEW-MESSAGE'

const initialState:DialogsPageType = {
    usersData: [
        {id: v1(), name: 'Serg Sergeev', ava: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg'},
        {id: v1(), name: 'Eva Ivanova', ava: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg'},
        {id: v1(), name: 'Leon Leonov', ava: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg'},
        {id: v1(), name: 'Kira Kirova', ava: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg'},
        {id: v1(), name: 'Lera Lerova', ava: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg'},
    ],
    messagesData: [
        {id: v1(), message: '111'},
        {id: v1(), message: '222'},
        {id: v1(), message: '333'},
        {id: v1(), message: '444'},
        {id: v1(), message: '555'},
    ],
}

//reducer
export function dialogsReducer(state:DialogsPageType = initialState, action:DialogsActionsType):DialogsPageType {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {...state, messagesData: [{id: v1(), message: action.newMessage}, ...state.messagesData]}
        default:
            return state
    }
}

//AC
export const addNewMessageAC = (newMessage:string) => ({type: ADD_NEW_MESSAGE, newMessage} as const)

//types
export type UserType = {id:string, name:string, ava:string}
export type MessageType = {id:string, message:string}
export type DialogsPageType = {usersData:Array<UserType>, messagesData:Array<MessageType>}

export type AddNewMessageActionType = ReturnType<typeof addNewMessageAC>
export type DialogsActionsType = AddNewMessageActionType