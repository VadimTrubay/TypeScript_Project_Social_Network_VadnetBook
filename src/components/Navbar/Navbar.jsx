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
        <div><NavLink to="/profile">Profile</NavLink></div>
        {isAuth ? <div><NavLink to="/friends">Friends</NavLink></div> : ''}
        <div><NavLink to="/dialogs">Messages</NavLink></div>
        <div className={styles.lastNavChild}><NavLink to="/users">Users</NavLink></div>

        {isAuth && window.innerWidth > 500 ? <> {/* hide friends list on mobile view */}
          <span className={styles.onlineTitle}>Your friends:</span>
          <div className={styles.sidebarFriends}>
            <OnlineFriendsListItem/>
          </div>
        </> : ''}
      </nav>
    </>
  );
}

export default Navbar;