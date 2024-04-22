import { PostType } from "../store/profile-reducer"
import { AppStateType } from "../store/store"

export function getPosts(state: AppStateType):Array<PostType> {
    return state.profilePage.postsData
}