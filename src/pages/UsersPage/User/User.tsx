import styles from "./User.module.css";
import {NavLink} from "react-router-dom";
import defaultImg from "../../../components/Other/user-smalled.png";
import React from "react";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../../redux/auth/selectors";
import {UserType} from "../../../types/userTypes";

const User = ({user}: UserType) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={isAuth ? styles.userBlock : styles.userBlockLogout} key={user.id}>
      <div className={styles.imgWrapper}>
        {/*<NavLink to={`/profile/${user.id}`}>*/}
        {/*<img className={styles.userImg} src={user.profile_picture ? user.profile_picture : defaultImg} alt=""/>*/}
        <img
          src={user?.profile_picture ? `https://res.cloudinary.com/dip870vma/${user?.profile_picture}`: defaultImg}
        />
        {/*</NavLink>*/}
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.nameBlockWrapper}>{user.user.username}</div>
        {user.status ? <div className={styles.statusBlockWrapper}><b>status: </b> {user.status}</div> : ''}
      </div>
      {/*{isAuth && loggedUserId !== user.id ?*/}
      {/*  <div className={styles.buttonsWrapper}>*/}
      {/*  {user.followed === true ?*/}
      {/*    <button disabled={followingInProgress.some(id => user.id === id)}*/}
      {/*            onClick={() => {unfollow(user.id);}}*/}
      {/*            className={styles.unfollowButton}>Unfollow</button> :*/}
      {/*    <button disabled={followingInProgress.some(id => user.id === id)}*/}
      {/*            onClick={() => {follow(user.id);}}*/}
      {/*            className={styles.followButton}>Follow</button>}*/}
      {/*  </div> : ""}*/}
    </div>
  );
}

export default User;