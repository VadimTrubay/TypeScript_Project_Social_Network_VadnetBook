import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import defaultUser from '../Other/user-smalled.png';
import samuraiLogo from './../Other/samuraiLogo.png';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserId, selectUserLogin} from "../../redux/auth/selectors.js";
import {selectUsers} from "../../redux/users/selectors.js";
import {logOut} from "../../redux/auth/operations.js";
import {useEffect} from "react";
// import {ModalButton} from "../Other/ModalButton/ModalButton";

const Header = () => {
  // const dispatch = useDispatch();
  // const userId = useSelector(selectUserId);
  // const userLogin = useSelector(selectUserLogin);
  // const isAuth = useSelector(selectIsAuth);
  //
  // const editUserProfileModal = () => {
  // }


  return (
    <header className={styles.header}>
      {/*<NavLink to={'/'} className={styles.navLinkHeaderLogoWrapper}>*/}
      {/*  <img src={samuraiLogo} alt="logo"/>*/}
      {/*  <div className={styles.headerSocialTitleWrapper}>*/}
      {/*    <span className={styles.headerSocialName}>Samurai</span>*/}
      {/*    <span className={styles.headerSocialSubname}>Social Network</span>*/}
      {/*  </div>*/}
      {/*</NavLink>*/}

      {/*<div className={styles.loginWrapper}>*/}
      {/*  {isAuth ? <div>*/}
      {/*      <NavLink className={styles.loggedUserLink} to={`/profile/${userId}`}*/}
      {/*               onClick={() => {*/}
      {/*                 editUserProfileModal(true)*/}
      {/*               }}>*/}
      {/*        <div className={styles.loggedUserWrapper}>*/}
      {/*          <span className={styles.loginName}>{userLogin}</span>*/}
      {/*          <div className={styles.loginLogoWrapper}>*/}
      {/*            <div className={styles.loginLogoWrapperOverflow}>*/}
      {/*              <img className={styles.loginLogo}*/}
      {/*                   src={defaultUser}*/}
      {/*                   alt="user"/>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </NavLink>*/}
      {/*      <button className={styles.logoutButton} onClick={() => {*/}
      {/*        dispatch(logOut());*/}
      {/*        // editUserProfileModal(false);*/}
      {/*      }}>LogOut*/}
      {/*      </button>*/}
      {/*    </div> :*/}
      {/*    <NavLink to={'/login'} className={styles.loginButton}>LogIn*/}
      {/*    </NavLink>*/}
      {/*  }*/}

      {/*  /!*<ModalButton burgerMenuStatus={props.burgerMenuStatus}*!/*/}
      {/*  /!*             switchBurgerMenuStatus={props.switchBurgerMenuStatus}></ModalButton>*!/*/}
      {/*</div>*/}
    </header>
  );
}

export default Header;
