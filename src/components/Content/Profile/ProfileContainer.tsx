import React, { ComponentType, PureComponent } from "react"
import { Profile } from './Profile'
import { getProfileTC, ProfileType, getProfileStatusTC, updateProfileStatusTC, updatePhotoTC } from '../../../store/profile-reducer'
import { AppStateType } from '../../../store/store'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from "redux"
import { getProfile, getProfileStatus } from "../../../selectors/profile-selectors"

class ProfileClassContainer extends PureComponent<any, any> {

    refreshProfile() {
        let userID = this.props.match.params.userId
        this.props.getProfileTC(userID)
        this.props.getProfileStatusTC(userID)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }
    render() {
        return <Profile
            isOwner={this.props.match.params.userId === '26782'}
            profile={this.props.profile}
            status={this.props.status}
            updatePhotoTC={this.props.updatePhotoTC}
            updateProfileStatusTC={updateProfileStatusTC}
        />
    }
}

type mapStateToPropsType = {
    profile: ProfileType
    status: string
}

function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        profile: getProfile(state),
        status: getProfileStatus(state),
    }
}

/* const ProfileClassWithRouterContainer = withRouter(ProfileClassContainer)
const ProfileWithAuthRedirectContainer = withAuthRedirect(ProfileClassWithRouterContainer)
const ProfileContainer = connect(mapStateToProps, {getUserTC})(ProfileWithAuthRedirectContainer) */

//равнозначные записи выше и ниже

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, { getProfileTC, getProfileStatusTC, updateProfileStatusTC, updatePhotoTC }),
    withAuthRedirect,
    withRouter
)(ProfileClassContainer)