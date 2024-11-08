import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowing, fetchUsers } from "../../redux/users/operations.js";
import { AppDispatch } from "../../redux/store";
import User from "./User/User";
import { Pagination } from "@mui/material";
import styles from "./Users.module.css";
import {
  selectTotalCountUsers,
  selectUsers,
} from "../../redux/users/selectors";
import { pageSize } from "../../initialValues/initialValues";
import Typography from "@mui/material/Typography";

const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const totalCountUsers: number = useSelector(selectTotalCountUsers);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const usersParams = {
      search: "",
      page: page,
    };
    dispatch(fetchUsers(usersParams));
    dispatch(fetchFollowing(1));
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  return (
    <div className={styles.usersMainWrapper}>
      <Typography variant="h5" fontSize={30}>
        Users
      </Typography>

      {totalCountUsers > 0 && (
        <Pagination
          count={Math.ceil(totalCountUsers / pageSize)} // Total number of pages
          page={page}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          sx={{ m: 2 }}
        />
      )}

      <div className={styles.usersBlockWrapper}>
        {users?.map((user: { id: React.Key | null | undefined }) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
