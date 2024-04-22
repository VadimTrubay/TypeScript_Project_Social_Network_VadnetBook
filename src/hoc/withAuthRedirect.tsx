import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {AppStateType} from '../store/store'

type mapStateToPropsType = {
    isAuth: boolean
}
function mapStateToProps(state: AppStateType):mapStateToPropsType {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect(Component: ComponentType) {

    function RedirectComponent(props: mapStateToPropsType) {

        let {isAuth, ...restProps} = props

        return isAuth ? <Component {...restProps}/> : <Redirect to={'/login'}></Redirect>
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}



