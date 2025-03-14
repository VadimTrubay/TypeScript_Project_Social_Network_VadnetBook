import React from 'react';
import styles from './OnlineFriendsListItem.module.css';
import defaultImage from '../../Other/user.png';
import { NavLink } from 'react-router-dom';
import { mainUrls } from '../../../config/urls';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// @ts-ignore
const OnlineFriendsListItem = ({ friend }) => {
  return (
    <>
      <NavLink to={mainUrls.users.userById(friend.user.id)} className={styles.friendItem}>
        {friend.profile_picture ? (
          <img
            src={`https://res.cloudinary.com/dip870vma/${friend?.profile_picture}`}

            // alt={friend.user.username}
          />
        ) : (
          <AccountCircleIcon className={styles.loginLogo} />
        )}
        <span>{friend.user.username}</span>
      </NavLink>
    </>
  );
};

export default OnlineFriendsListItem;
