import {followAC, FriendsPageType, friendsReducer, unfollowAC} from './friends-reducer';

test('correct following', () => {
    const startstate:FriendsPageType = {
        friendsData: [
            {id: '1', name: 'Alex', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: true},
            {id: '2', name: 'Serg', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: false},
            {id: '3', name: 'Petr', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: true},
            {id: '4', name: 'Ivan', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: false},
            {id: '5', name: 'Gleb', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: true},
        ],
        currentPage: 1,
        pageSize: 5,
        totalUsersCount: 0,
        preloaderStatus: false,
        disabledButtons: [],
    }

    const action1 = followAC('2')
    const action2 = followAC('4')

    const endState1 = friendsReducer(startstate, action1)
    const endState2 = friendsReducer(startstate, action2)

    expect(endState1.friendsData[1].followed).toBe(true)
    expect(endState2.friendsData[3].followed).toBe(true)
})

test('correct unfollowing', () => {
    const startstate:FriendsPageType = {
        friendsData: [
            {id: '1', name: 'Alex', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: true},
            {id: '2', name: 'Serg', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: false},
            {id: '3', name: 'Petr', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: true},
            {id: '4', name: 'Ivan', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: false},
            {id: '5', name: 'Gleb', uniqueUrlName: '', photos: {small: '', large: ''}, status: '', followed: true},
        ],
        currentPage: 1,
        pageSize: 5,
        totalUsersCount: 0,
        preloaderStatus: false,
        disabledButtons: [],
    }

    const action1 = unfollowAC('1')
    const action2 = unfollowAC('3')
    const action3 = unfollowAC('5')

    const endState1 = friendsReducer(startstate, action1)
    const endState2 = friendsReducer(startstate, action2)
    const endState3 = friendsReducer(startstate, action3)

    expect(endState1.friendsData[0].followed).toBe(false)
    expect(endState2.friendsData[2].followed).toBe(false)
    expect(endState3.friendsData[4].followed).toBe(false)
})