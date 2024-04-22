import { AppStateType } from "../store/store"

export function getLogin(state: AppStateType):string|null {
    return state.auth.login
}
export function getIsAuth(state: AppStateType):boolean {
    return state.auth.isAuth
}