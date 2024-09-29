import React, {useEffect} from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import defaultUser from '../Other/user-smalled.png';
import logo from './../Other/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../../redux/auth/selectors.js";
import {fetchMe, logOut, signIn} from "../../redux/auth/operations.js";
import {AppDispatch} from "../../redux/store";
import {RouterEndpoints} from "../../config/routes";
import {selectMe} from "../../redux/auth/selectors";
import {mainUrls} from "../../config/urls";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import defaultImg from "../Other/user-smalled.png";
import {selectMeProfile} from "../../redux/profile/selectors";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectMeProfile);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchMe());
  }, [isAuth, dispatch]);

console.log(user)

  return (
    <header className={styles.header}>
      <NavLink to={'/users'} className={styles.navLinkHeaderLogoWrapper}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <div className={styles.headerSocialTitleWrapper}>
          <span className={styles.headerSocialName}>VadnetBook</span>
          <span className={styles.headerSocialSubname}>Social Network</span>
        </div>
      </NavLink>

      <div>
        {isAuth ? <div className={styles.loginWrapper}>
            <NavLink className={styles.loggedUserLink} to={mainUrls.profile.profile}
                     onClick={() => {
                       // editUserProfileModal(true)
                     }}>
              <div className={styles.loggedUserWrapper}>
                <span className={styles.loginName}>{user.user?.username}</span>
                <div className={styles.loginLogoWrapper}>
                  <div className={styles.loginLogoWrapperOverflow}>
                    <img
                      className={styles.userImg}
                      alt={user?.username}
                      src={user?.profile_picture ?
                        `https://res.cloudinary.com/dip870vma/${user?.profile_picture}`
                       :
                      <AccountCircleIcon className={styles.loginLogo}/>}
                    />

                  </div>
                </div>
              </div>
            </NavLink>
            <Button className={styles.logoutButton} variant="contained" onClick={() => {
              dispatch(logOut());
            }}>LogOut
            </Button>
          </div> :
          <NavLink to={RouterEndpoints.signin}>
            <Button
              className={styles.logoutButton}
              variant="contained"
              style={{textTransform: "none"}}>
              SignIn
            </Button>
          </NavLink>
        }

        {/*<ModalButton burgerMenuStatus={props.burgerMenuStatus}*/}
        {/*             switchBurgerMenuStatus={props.switchBurgerMenuStatus}></ModalButton>*/}
      </div>
    </header>
  );
}

export default Header;
