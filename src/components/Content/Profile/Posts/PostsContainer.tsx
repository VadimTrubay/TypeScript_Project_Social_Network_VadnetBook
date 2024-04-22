import React from "react"
import { Posts } from "./Posts"
import { connect } from "react-redux"
import { AppStateType } from "../../../../store/store"
import { PostType } from '../../../../store/profile-reducer'
import { getPosts } from "../../../../selectors/posts-selectors"

type mapStateToPropsType = {
    postsData: Array<PostType>
}

function mapStateToProps(state:AppStateType):mapStateToPropsType {
    return {
        postsData: getPosts(state),
    }
}

export const PostsContainer = connect(mapStateToProps)(Posts)