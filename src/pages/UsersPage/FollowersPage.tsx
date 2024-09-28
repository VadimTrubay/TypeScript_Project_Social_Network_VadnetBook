import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFollowers, fetchUsers} from "../../redux/users/operations.js";
import {AppDispatch} from "../../redux/store";
import User from "./User/User";
import {Pagination} from "@mui/material";
import styles from "./Users.module.css";
import {selectFollowers, selectRefresh, selectTotalCountFollowers} from "../../redux/users/selectors";
import {RequestListUserType, UserType} from "../../types/userTypes";
import {selectIsAuth} from "../../redux/auth/selectors";
import {pageSize} from "../../initialValues/initialValues";
import Typography from "@mui/material/Typography";


const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const followers = useSelector(selectFollowers) as RequestListUserType;
  const totalCountFollowers: number = useSelector(selectTotalCountFollowers);
  const isRefresh = useSelector<boolean>(selectRefresh);
  const isAuth = useSelector(selectIsAuth);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchFollowers(page));
  }, [page, isRefresh]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.usersMainWrapper}>
      <Typography variant="h5" fontSize={30}>
        Followers
      </Typography>
      <Pagination
        count={Math.ceil(totalCountFollowers / pageSize)} // Total number of pages
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"/>

      <div className={styles.usersBlockWrapper}>
        {followers.map((follower) =>
          <User
            key={follower.id}
            user={follower}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
