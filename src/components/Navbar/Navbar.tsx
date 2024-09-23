import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import OnlineFriendsListItem from "./OnlineFriendsListItem/OnlineFriendsListItem";
import {selectIsAuth} from "../../redux/auth/selectors.js";
import {useSelector} from "react-redux";
import {RouterEndpoints} from "../../config/routes";

const Navbar: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <nav className={styles.nav}>
        <div><NavLink to={RouterEndpoints.users}>Users</NavLink></div>
        {isAuth &&
          <div>
            <div><NavLink to={RouterEndpoints.friends}>Friends</NavLink></div>
            <div><NavLink to={RouterEndpoints.messages}>Messages</NavLink></div>
            <div><NavLink to={RouterEndpoints.profile}>Profile</NavLink></div>
            <div className={styles.lastNavChild}><NavLink to={RouterEndpoints.settings}>Settings</NavLink></div>
            <span className={styles.onlineTitle}>Your friends:</span>
            <div className={styles.sidebarFriends}>
              <OnlineFriendsListItem/>
            </div>
          </div>
        }
      </nav>
    </>
  );
}

export default Navbar;