import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/users/operations.js";
import {AppDispatch} from "../../redux/store";
import User from "./User/User";
import {Pagination} from "@mui/material";
import styles from "./Users.module.css";
import {
  selectRefresh,
  selectSearchUsers,
  selectTotalCountSearchUsers,
} from "../../redux/users/selectors";
import {RequestListUserType} from "../../types/userTypes";
import {pageSize} from "../../initialValues/initialValues";
import Typography from "@mui/material/Typography";


const SearchUsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchUsers = useSelector(selectSearchUsers) as RequestListUserType;
  const totalCountSearchUsers: number = useSelector(selectTotalCountSearchUsers);
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
        Users search results
      </Typography>
      <Pagination
        count={Math.ceil(totalCountSearchUsers / pageSize)} // Total number of pages
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"/>

      <div className={styles.usersBlockWrapper}>
        {searchUsers?.map((user) =>
          <User
            key={user.id}
            user={user}
          />
        )}
      </div>
    </div>
  );
};

export default SearchUsersPage;
