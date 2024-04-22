import React, { useEffect } from 'react'
import './App.css'
import { Nav } from "../components/Common/Nav/Nav"
import { Content } from "../components/Content/Content"
import { HeaderContainer } from '../components/Common/Header/HeaderContainer'
import { useDispatch } from 'react-redux'
import { AppStateType, AppDispatchType } from '../store/store'
import { setInitializationTC } from '../store/app-reducer'
import { useSelector } from 'react-redux'
import { Preloader } from '../components/Common/Preloader/Preloader'
import { LoginContainer } from '../components/Content/Login/Login'

export const App = React.memo(() => {

  const initialized = useSelector<AppStateType, boolean>(st => st.app.initialized)
  const isAuth = useSelector<AppStateType, boolean>(st => st.auth.isAuth)
  const dispatch = useDispatch<AppDispatchType>()

  useEffect(() => {
    dispatch(setInitializationTC())
  }, [dispatch])

  return (
    <div className="body">
      <div className="app-wrapper">
        <HeaderContainer />
        {isAuth
          ?
          <div className='navAndContent'>
            <Nav />
            {initialized ? <Content /> : <div className='preloader'><Preloader /></div>}
          </div>
          :
          <div className='loginContainer'><LoginContainer /></div>
        }
      </div>
    </div>
  )
})