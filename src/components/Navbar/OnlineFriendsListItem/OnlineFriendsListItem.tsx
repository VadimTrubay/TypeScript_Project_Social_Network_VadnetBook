import React from "react";
import styles from './OnlineFriendsListItem.module.css';
import defaultImage from '../../Other/user.png';
import {NavLink} from "react-router-dom";
import {mainUrls} from "../../../config/urls";


// @ts-ignore
const OnlineFriendsListItem = ({friend}) => {

  return (
    <>
        <NavLink
          to={mainUrls.users.userById(friend.user.id)}
          className={styles.friendItem}
        >
          <img src={friend.profile_picture ?
            `https://res.cloudinary.com/dip870vma/${friend?.profile_picture}`
            :
            defaultImage
          }
           alt={friend.user.username}
          />
          <span>{friend.user.username}</span>
        </NavLink>
    </>);
};

export default OnlineFriendsListItem;