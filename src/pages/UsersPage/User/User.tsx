import styles from "./User.module.css";
import {NavLink} from "react-router-dom";
import defaultImg from "../../../components/Other/user-smalled.png";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectMe} from "../../../redux/auth/selectors";
import {mainUrls} from "../../../config/urls";
import {follow, unfollow} from "../../../redux/users/operations";
import {AppDispatch} from "../../../redux/store";


const User = ({user}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const me = useSelector(selectMe);
  const isAuth = useSelector(selectIsAuth);

  const handleUnfollow = () => {
    dispatch(unfollow(user.user.id));
  };

  const handleFollow = () => {
    dispatch(follow(user.user.id));
  };

  return (
    <div className={styles.userBlock}>
      <div className={styles.imgWrapper}>
        <NavLink to={mainUrls.users.userById(user.user.id)}>
          <img
            className={styles.userImg}
            src={
              user?.profile_picture
                ? `https://res.cloudinary.com/dip870vma/${user?.profile_picture}`
                : defaultImg
            }
            alt={user.user.username}
          />
        </NavLink>
      </div>
      <div className={styles.infoBlockWrapper}>
        <div className={styles.infoBlock}>
          <div className={styles.nameBlockWrapper}>{user.user.username}</div>
          {user.status ? (
            <div className={styles.statusBlockWrapper}>
              <b>status: </b> {user.status}
            </div>
          ) : null}
        </div>
      </div>
      {isAuth && user.user?.id !== me?.id ? (
        <div className={styles.buttonsWrapper}>
          {user.is_friend ? (
            <button
              onClick={handleUnfollow}
              className={styles.unfollowButton}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={handleFollow}
              className={styles.followButton}
            >
              Follow
            </button>
          )}
        </div>
      ) : ""}
    </div>
  );
};

export default User;
