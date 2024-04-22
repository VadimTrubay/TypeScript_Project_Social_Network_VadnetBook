import s from './About.module.css'
import React, { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatchType } from '../../../../store/store'

type ProfileStatusPropsType = {
    status: string
    updateProfileStatusTC: (status: string) => void
}

export const ProfileStatus = React.memo((props: ProfileStatusPropsType) => {
    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    const dispatch = useDispatch<AppDispatchType>()

    const [localStatus, setLocalStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    function activateEditMode() {
        setEditMode(true)
    }
    function deactivateEditMode() {
        setEditMode(false)
        dispatch(props.updateProfileStatusTC(localStatus))
    }
    function changeStatus(e: ChangeEvent<HTMLInputElement>) {
        setLocalStatus(e.currentTarget.value)
    }

    return editMode ? (
        <input
            onChange={changeStatus}
            onBlur={deactivateEditMode}
            className={s.statusInput}
            value={localStatus}
            autoFocus
        />
    ) : (
        <span onDoubleClick={activateEditMode} className={s.statusSpan}>
            Status: {props.status || '---'}
        </span>
    )
})