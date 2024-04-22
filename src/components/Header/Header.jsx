import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../Other/Preloader/Preloader";
// import defaultUser from '../Other/user-smalled.png';
import samuraiLogo from './../Other/samuraiLogo.png';
// import { ModalButton } from "../Other/ModalButton/ModalButton";
import { selectIsLoading } from "../../redux/users/selectors"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);


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
        {isLoading ? <Preloader /> :
          isLoggedIn ? <div></div> :
            // <NavLink className={styles.loggedUserLink} to={`/profile/${props.userId}`}
            //          onClick={ () => {props.switchBurgerMenuStatus(false)}}>
            //   <div className={styles.loggedUserWrapper}>
            //     <span className={styles.loginName}>{props.login}</span>
            //     <div className={styles.loginLogoWrapper}>
            //       <div className={styles.loginLogoWrapperOverflow}>
            //         <img className={styles.loginLogo} src={props.smallLogo === null ? defaultUser : props.smallLogo} alt=""/>
            //       </div>
            //       <div className={styles.logoutButtonWrapper}>
            //         <button className={styles.logoutButton} onClick={ () => {
            //           props.logout();
            //           props.switchBurgerMenuStatus(false);
            //         }}>LogOut</button>
            //       </div>
            //     </div>
            //   </div>
            // </NavLink> :
          <NavLink to={'/login'} className={styles.loginButton}>LogIn</NavLink>}

        {/* <ModalButton burgerMenuStatus={props.burgerMenuStatus} switchBurgerMenuStatus={props.switchBurgerMenuStatus}></ModalButton> */}
      </div>
    </header>
  );
}

export default Header;