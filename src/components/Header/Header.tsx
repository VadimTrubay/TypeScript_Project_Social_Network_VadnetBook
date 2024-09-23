import React, {useEffect} from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import defaultUser from '../Other/user-smalled.png';
import samuraiLogo from './../Other/samuraiLogo.png';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserId, selectUserLogin} from "../../redux/auth/selectors.js";
import {logOut, signIn} from "../../redux/auth/operations.js";
import {AppDispatch} from "../../redux/store";
import {RouterEndpoints} from "../../config/routes";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(selectUserId);
  const userLogin = useSelector(selectUserLogin);
  const isAuth = useSelector(selectIsAuth);

  // const editUserProfileModal = (a) => {
  // }


  return (
    <header className={styles.header}>
      <NavLink to={'/'} className={styles.navLinkHeaderLogoWrapper}>
        <img src={samuraiLogo} alt="logo"/>
        <div className={styles.headerSocialTitleWrapper}>
          <span className={styles.headerSocialName}>Samurai</span>
          <span className={styles.headerSocialSubname}>Social Network</span>
        </div>
      </NavLink>

      <div className={styles.loginWrapper}>
        {isAuth ? <div>
            <NavLink className={styles.loggedUserLink} to={`/profile/${userId}`}
                     onClick={() => {
                       editUserProfileModal(true)
                     }}>
              <div className={styles.loggedUserWrapper}>
                <span className={styles.loginName}>{userLogin}</span>
                <div className={styles.loginLogoWrapper}>
                  <div className={styles.loginLogoWrapperOverflow}>
                    <img className={styles.loginLogo}
                         src={defaultUser}
                         alt="user"/>
                  </div>
                </div>
              </div>
            </NavLink>
            <button className={styles.logoutButton} onClick={() => {
              dispatch(logOut());
            }}>LogOut
            </button>
          </div> :
          <NavLink to={RouterEndpoints.signin} className={styles.loginButton}>SignIn
          </NavLink>
        }

        {/*<ModalButton burgerMenuStatus={props.burgerMenuStatus}*/}
        {/*             switchBurgerMenuStatus={props.switchBurgerMenuStatus}></ModalButton>*/}
      </div>
    </header>
  );
}

export default Header;
