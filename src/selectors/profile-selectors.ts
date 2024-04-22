import { ProfileType } from "../store/profile-reducer"
import { AppStateType } from "../store/store"

export function getProfile(state: AppStateType):ProfileType {
    return state.profilePage.profile
}
export function getProfileStatus(state: AppStateType):string {
    return state.profilePage.status
}