import React from "react"
import s from './ErrorPage.module.css'

export const ErrorPage = React.memo(() => {
    return <div className={s.error}>Error 404: Not found</div>
})