import thunkMiddleware from 'redux-thunk'
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { appReducer } from './app-reducer'
import { authReducer } from './auth-reducer'
import { navbarReducer } from './navbar-reducer'
import { profileReducer } from './profile-reducer'
import { friendsReducer } from './friends-reducer'
import { dialogsReducer} from './dialogs-reducer'
import { reducer as formReducer } from 'redux-form'

const RootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    navbar: navbarReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    form: formReducer,
})

export const store = legacy_createStore(RootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof RootReducer>

export type AppDispatchType = typeof store.dispatch