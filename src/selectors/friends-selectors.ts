import { FriendType } from "../store/friends-reducer"
import { AppStateType } from "../store/store"

export function getFriends(state: AppStateType):Array<FriendType> {
    return state.friendsPage.friendsData
}
export function getCurrentPage(state: AppStateType):number {
    return state.friendsPage.currentPage
}
export function getPagesize(state: AppStateType):number {
    return state.friendsPage.pageSize
}
export function getTotalUsersCount(state: AppStateType):number {
    return state.friendsPage.totalUsersCount
}
export function getPreloaderStatus(state: AppStateType):boolean {
    return state.friendsPage.preloaderStatus
}
export function getDisabledButtons(state: AppStateType):Array<string> {
    return state.friendsPage.disabledButtons
}