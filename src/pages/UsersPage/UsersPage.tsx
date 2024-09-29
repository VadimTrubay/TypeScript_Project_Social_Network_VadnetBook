import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/users/operations.js";
import {AppDispatch} from "../../redux/store";
import User from "./User/User";
import {Pagination} from "@mui/material";
import styles from "./Users.module.css";
import {selectRefresh, selectTotalCountUsers, selectUsers} from "../../redux/users/selectors";
import {RequestListUserType} from "../../types/userTypes";
import {selectIsAuth} from "../../redux/auth/selectors";
import {pageSize} from "../../initialValues/initialValues";
import Typography from "@mui/material/Typography";


const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers) as RequestListUserType;
  const totalCountUsers: number = useSelector(selectTotalCountUsers);
  const isRefresh = useSelector<boolean>(selectRefresh);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page, isRefresh]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.usersMainWrapper}>
      <Typography variant="h5" fontSize={30}>
        Users
      </Typography>
      <Pagination
        count={Math.ceil(totalCountUsers / pageSize)} // Total number of pages
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"/>

      <div className={styles.usersBlockWrapper}>
        {users.map((user) =>
          <User
            key={user.id}
            user={user}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
