import {authAPI} from '../api/api'
import {AppDispatchType} from './store'
import {stopSubmit} from 'redux-form'

//constants
const SET_AUTH_USER_DATA = 'AUTH/SET_AUTH_USER_DATA'

const initialState:AuthType = {id: null, email: null, login: null, isAuth: false}

//reducer
export function authReducer(state:AuthType = initialState, action:AuthActionsType):AuthType {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, id: action.id, email: action.email, login: action.login, isAuth: action.isAuth}
        default:
            return state
    }
}

//AC
export const setAuthUserDataAC = (id:number|null, email:string|null, login:string|null, isAuth:boolean) => {
    return {type: SET_AUTH_USER_DATA, id, email, login, isAuth} as const
}

//TC
export const getAuthUserTC = () => async (dispatch: AppDispatchType) => {
    const data = await authAPI.getAuthUser()
    if (data.resultCode === 0) {dispatch(setAuthUserDataAC(data.data.id, data.data.email, data.data.login, true))}
}
export const loginUserTC = (email:string, password:string, rememberMe:boolean) => async (dispatch: AppDispatchType) => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {dispatch(getAuthUserTC())}
    else {dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'some error'}))}
}
export const logoutUserTC = () => async (dispatch: AppDispatchType) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {dispatch(setAuthUserDataAC(null, null, null, false))}
}

//types
export type AuthType = {id: number | null, email: string | null, login: string | null, isAuth: boolean}
export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>