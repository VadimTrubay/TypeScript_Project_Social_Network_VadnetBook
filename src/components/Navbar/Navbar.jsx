import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import OnlineFriendsListItem from "./OnlineFriendsListItem/OnlineFriendsListItem";
import {selectIsAuth} from "../../redux/auth/selectors.js";
import {useSelector} from "react-redux";

const Navbar = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <nav className={styles.nav}>
        <div><NavLink to="/users">Users</NavLink></div>
        {isAuth &&
          <div>
            <div><NavLink to="/friends">Friends</NavLink></div>
            <div><NavLink to="/messages">Messages</NavLink></div>
            <div><NavLink to="/me">Profile</NavLink></div>
            <div className={styles.lastNavChild}><NavLink to="/settings">Settings</NavLink></div>
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