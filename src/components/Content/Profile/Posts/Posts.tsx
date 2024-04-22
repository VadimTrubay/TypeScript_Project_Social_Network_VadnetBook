import React from 'react'
import s from './Posts.module.css'
import { Post } from "./Post"
import { PostType } from '../../../../store/profile-reducer'

type PostsPropsType = {
    postsData: Array<PostType>
}

export const Posts = React.memo((props: PostsPropsType) => {
    return (
        <div className={s.posts}>
            {props.postsData && props.postsData.map((el) => <Post key={el.id} id={el.id} message={el.message} likes={el.likes} ava={el.ava} />)}
        </div>
    )
})