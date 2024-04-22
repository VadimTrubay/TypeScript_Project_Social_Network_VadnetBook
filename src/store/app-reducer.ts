import { AppDispatchType } from "./store"
import { getAuthUserTC } from "./auth-reducer"

//constants
const INITIALIZATION_APP = 'APP/INITIALIZATION_APP'

const initState = {initialized: false}

//reducer
export function appReducer(state:InitStateType = initState, action:AppReducerActionsType):InitStateType {
    switch (action.type) {
        case INITIALIZATION_APP:
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}

//AC
export const setInitializationAC = () => ({type: INITIALIZATION_APP, initialized:true} as const)

//TC
export const setInitializationTC = () => (dispatch: AppDispatchType) => {
    Promise.all([dispatch(getAuthUserTC())]).then(() => {dispatch(setInitializationAC())}) 
}

//types
export type InitStateType = typeof initState
export type AppReducerActionsType = ReturnType<typeof setInitializationAC>