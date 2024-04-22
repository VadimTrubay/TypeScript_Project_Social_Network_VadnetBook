import { usersAPI } from '../api/api'
import { AppDispatchType } from './store'

//constants
const FOLLOW = 'FRIENDS/FOLLOW'
const UNFOLLOW = 'FRIENDS/UNFOLLOW'
const SET_USERS = 'FRIENDS/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'FRIENDS/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'FRIENDS/SET_CURRENT_PAGE'
const CHANGE_PRELOADER_STATUS = 'FRIENDS/CHANGE_PRELOADER_STATUS'
const TOGGLE_BUTTONS_DISABLED = 'FRIENDS/TOGGLE_BUTTONS_DISABLED'

const initialState:FriendsPageType = {
    friendsData: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    preloaderStatus: false,
    disabledButtons: [],
}

//reducer
export function friendsReducer(state:FriendsPageType = initialState, action:FriendsActionsType):FriendsPageType {
    switch (action.type) {
        case FOLLOW:
            return {...state, friendsData: state.friendsData.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {...state, friendsData: state.friendsData.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, friendsData: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case CHANGE_PRELOADER_STATUS:
            return {...state, preloaderStatus: action.newPreloaderStatus}
        case TOGGLE_BUTTONS_DISABLED:
            return action.isDisabled ? {...state, disabledButtons: [...state.disabledButtons, action.buttonID]} : {...state, disabledButtons: state.disabledButtons.filter(el => el !== action.buttonID)}
        default:
            return state
    }
}

//AC
export const followAC = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<FriendType>) => ({type: SET_USERS, users} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const changePreloaderStatusAC = (newPreloaderStatus: boolean) => ({type: CHANGE_PRELOADER_STATUS, newPreloaderStatus} as const)
export const toggleButtonsDisabledAC = (isDisabled: boolean, buttonID: string) => ({type: TOGGLE_BUTTONS_DISABLED, isDisabled, buttonID} as const)

//TC
export const getUsersTC = (currentPage:number, pageSize:number) => async (dispatch: AppDispatchType) => {
    dispatch(changePreloaderStatusAC(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(changePreloaderStatusAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
}
export const changeCurrentPageTC = (currentPageNumber: number) => async (dispatch: AppDispatchType) => {
    dispatch(changePreloaderStatusAC(true))
    dispatch(setCurrentPageAC(currentPageNumber))
    const data = await usersAPI.getUsers(currentPageNumber, initialState.pageSize)
    dispatch(changePreloaderStatusAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
}
export const createFollowTC = (userID: string) => async (dispatch: AppDispatchType) => {
    dispatch(toggleButtonsDisabledAC(true, userID))
    const data = await usersAPI.createFollow(userID)
    if(data.resultCode === 0) {dispatch(followAC(userID))}
    dispatch(toggleButtonsDisabledAC(false, userID))
}
export const deleteFollowTC = (userID: string) => async (dispatch: AppDispatchType) => {
    dispatch(toggleButtonsDisabledAC(true, userID))
    const data = await usersAPI.deleteFollow(userID)
    if(data.resultCode === 0) {dispatch(unfollowAC(userID))}
    dispatch(toggleButtonsDisabledAC(false, userID))
}

//types
export type FriendType = {
    id: string
    name: string
    uniqueUrlName: string
    photos: {small: string, large: string}
    status: string
    followed: boolean
}
export type FriendsPageType = {
    friendsData: Array<FriendType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    preloaderStatus: boolean
    disabledButtons: Array<string>
}

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type ChangePreloaderStatusActionType = ReturnType<typeof changePreloaderStatusAC>
export type ToggleButtonsDisableActionType = ReturnType<typeof toggleButtonsDisabledAC>

export type FriendsActionsType = 
| FollowActionType
| UnfollowActionType
| SetUsersActionType
| SetTotalUsersCountActionType
| SetCurrentPageActionType
| ChangePreloaderStatusActionType
| ToggleButtonsDisableActionType