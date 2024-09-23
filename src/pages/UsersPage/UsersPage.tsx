import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectTotalCountUsers, selectUsers} from "../../redux/users/selectors.js";
import {fetchUsers} from "../../redux/users/operations.js";
import {AppDispatch} from "../../redux/store";
import {UserType} from "../../types/userTypes";
import User from "./User/User";
import {Pagination} from "@mui/material";
import styles from "./Users.module.css";
import {selectIsAuth} from "../../redux/auth/selectors";


const UsersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalCountUsers: number = useSelector(selectTotalCountUsers);
  const users = useSelector(selectUsers) as UserType[];
  const isAuth = useSelector(selectIsAuth);

  const [page, setPage] = useState(1);
  const pageSize = 30;  // Adjust the page size as per your requirement

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.usersMainWrapper}>
      <Pagination
        count={Math.ceil(totalCountUsers / pageSize)} // Total number of pages
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"
      />
      {isAuth ?
        <div className={styles.OnlyFriendsBlockWrapper}>
          <label htmlFor='onlyFriendsInput'>Show friends</label>
          {/*<input id='onlyFriendsInput' type="checkbox" onChange={onlyFriends} ref={input}/>*/}
        </div> : ''
      }



      <div className={styles.usersBlockWrapper}>
        {users.map(user =>
          <User key={user.id} user={user}/>
        )}
      </div>
      <Pagination
        count={Math.ceil(totalCountUsers / pageSize)} // Total number of pages
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"
      />
    </div>
  );
};

export default UsersPage;
