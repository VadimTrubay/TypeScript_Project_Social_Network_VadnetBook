import React, { PureComponent } from "react"
import { Header } from './Header'
import { logoutUserTC } from '../../../store/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from "../../../store/store"
import { getIsAuth, getLogin } from "../../../selectors/header-selectors"

export class HeaderClassContainer extends PureComponent<any, any> {
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logoutUserTC={this.props.logoutUserTC} />
    }
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        login: getLogin(state),
        isAuth: getIsAuth(state)
    }
}

export const HeaderContainer = connect(mapStateToProps, { logoutUserTC })(HeaderClassContainer)