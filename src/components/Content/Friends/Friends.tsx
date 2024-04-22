import React, { useState } from 'react'
import { FriendType } from '../../../store/friends-reducer'
import { Friend } from './Friend'
import s from './Friends.module.css'

type FriendsPropsType = {
    friendsData: Array<FriendType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    disabledButtons: Array<string>

    createFollow: (userId: string) => void
    deleteFollow: (userId: string) => void

    changeCurrentPage: (currentPageNumber: number) => void
}

export const Friends = React.memo((props: FriendsPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const arrPages = []

    for (let i = 1; i <= pagesCount; i++) {
        arrPages.push(i)
    }

    const portionsCount = Math.ceil(pagesCount / 20)

    const [portionNumber, setPortionNumber] = useState(Math.ceil(props.currentPage / 20))
    const leftPortionBorder = (portionNumber - 1) * 20 + 1
    const rightPortionBorder = portionNumber * 20

    return (
        <div className={s.friends}>
            {props.friendsData.map((el) =>
                <Friend
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    photo={el.photos.small}
                    status={el.status}
                    disabledButtons={props.disabledButtons}
                    followed={el.followed}
                    createFollow={() => props.createFollow(el.id)}
                    deleteFollow={() => props.deleteFollow(el.id)}
                />
            )}
            <div className={s.pagesNumbersDiv}>
                <button
                    className={portionNumber === 1 ? s.arrowDisabled : s.arrow}
                    disabled={portionNumber === 1}
                    onClick={() => { setPortionNumber(portionNumber - 1) }}
                >
                    {"<prev"}
                </button>
                {arrPages.filter(p => p >= leftPortionBorder && p <= rightPortionBorder).map((page, index) => {
                    return (
                        <span
                            key={index}
                            className={props.currentPage === page ? s.currentPage : s.page}
                            onClick={() => props.changeCurrentPage(page)}>{page}
                        </span>
                    )
                })}
                <button
                    className={portionNumber === portionsCount ? s.arrowDisabled : s.arrow}
                    disabled={portionNumber === portionsCount}
                    onClick={() => { setPortionNumber(portionNumber + 1) }}
                >
                    {"next>"}
                </button>
            </div>
        </div>
    )
})