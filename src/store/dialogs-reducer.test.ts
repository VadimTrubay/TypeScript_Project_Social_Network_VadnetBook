import {v1} from 'uuid';
import {addNewMessageAC, DialogsPageType, dialogsReducer} from './dialogs-reducer';

test('correct add message', () => {

    const startState:DialogsPageType = {
        usersData: [
            {id: v1(), name: 'Serg Sergeev', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Eva Ivanova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Leon Leonov', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Kira Kirova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Lera Lerova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        ],
        messagesData: [
            {id: v1(), message: '111'},
            {id: v1(), message: '222'},
            {id: v1(), message: '333'},
            {id: v1(), message: '444'},
            {id: v1(), message: '555'},
        ],
    }

    const action = addNewMessageAC('bbb')

    const endState = dialogsReducer(startState, action)

    expect(endState.messagesData.length).toBe(6)
    expect(endState.messagesData[0].message).toBe('bbb')
})