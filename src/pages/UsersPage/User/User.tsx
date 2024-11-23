import styles from "./User.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import defaultImg from "../../../components/Other/user-smalled.png";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectMe } from "../../../redux/auth/selectors";
import { mainUrls } from "../../../config/urls";
import {
    fetchFollowing,
    fetchUserById, fetchUsers,
    follow,
    unfollow,
} from "../../../redux/users/operations";
import { AppDispatch } from "../../../redux/store";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { createDialog } from "../../../redux/dialogs/operations";

const User = ({ user }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const me = useSelector(selectMe);
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  const handleUnfollow = () => {
    dispatch(unfollow(user.user.id));
      const usersParams = {
          search: "",
          page: 1,
      };
      dispatch(fetchUsers(usersParams));
      dispatch(fetchFollowing(1));
  };

  const handleFollow = () => {
    dispatch(follow(user.user.id));
      const usersParams = {
          search: "",
          page: 1,
      };
      dispatch(fetchUsers(usersParams));
      dispatch(fetchFollowing(1));
  };

  const handleCreateDialog = () => {
    dispatch(
      createDialog({
        users: user.user.id,
      }),
    );
    dispatch(fetchUserById(user.user.id));
    navigate(mainUrls.dialogs.dialogs);
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

      {isAuth && user.user?.id !== me?.id && user.is_friend ? (
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              onClick={handleCreateDialog}
              size="large"
              variant="contained"
              startIcon={<RateReviewIcon />}
              sx={{ marginTop: 1, marginBottom: 1 }}
            >
              Go to chat
            </Button>
          </Grid>
        </Grid>
      ) : null}

      {isAuth && user.user?.id !== me?.id ? (
        <div className={styles.buttonsWrapper}>
          {user.is_friend ? (
            <button onClick={handleUnfollow} className={styles.unfollowButton}>
              Unfollow
            </button>
          ) : (
            <button onClick={handleFollow} className={styles.followButton}>
              Follow
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
