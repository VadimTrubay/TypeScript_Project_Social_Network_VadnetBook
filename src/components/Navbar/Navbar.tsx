import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import OnlineFriendsListItem from "./OnlineFriendsListItem/OnlineFriendsListItem";
import {selectIsAuth} from "../../redux/auth/selectors.js";
import {useSelector} from "react-redux";
import {RouterEndpoints} from "../../config/routes";
import {UserType} from "../../types/userTypes";
import {selectFollowing} from "../../redux/users/selectors";

const Navbar: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const friendsList = useSelector(selectFollowing) as UserType[];

  return (
    <>
      <nav className={styles.nav}>
        <div>
          <NavLink
            to={RouterEndpoints.users}
            end
            className={({isActive}) => isActive ? styles.active : ''}>
            Users
          </NavLink>
        </div>
        {isAuth && (
          <div>
            <div>
              <NavLink
                to={RouterEndpoints.profile}
                end
                className={({isActive}) => isActive ? styles.active : ''}>
                Profile
              </NavLink>
            </div>
            <div>
              <NavLink
                to={RouterEndpoints.followers}
                end
                className={({isActive}) => isActive ? styles.active : ''}>
                Followers
              </NavLink>
            </div>
            <div>
              <NavLink
                to={RouterEndpoints.following}
                end
                className={({isActive}) => isActive ? styles.active : ''}>
                Following
              </NavLink>
            </div>
            <div>
              <NavLink
                to={RouterEndpoints.messages}
                end
                className={({isActive}) => isActive ? styles.active : ''}>
                Messages
              </NavLink>
            </div>
            <div className={styles.lastNavChild}>
              <NavLink
                to={RouterEndpoints.settings}
                end
                className={({isActive}) => isActive ? styles.active : ''}>
                Settings
              </NavLink>
            </div>
            <span className={styles.onlineTitle}>Your friends:</span>
            <div className={styles.sidebarFriends}>
              {friendsList.slice(0, 6).map((item: any) => (
                <OnlineFriendsListItem
                  key={item.id}
                  friend={item} // Передаем конкретного друга
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
