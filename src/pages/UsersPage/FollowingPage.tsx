import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFollowing} from "../../redux/users/operations.js";
import {AppDispatch} from "../../redux/store";
import User from "./User/User";
import {Pagination} from "@mui/material";
import styles from "./Users.module.css";
import {selectFollowing, selectTotalCountFollowing} from "../../redux/users/selectors";
import {UserType} from "../../types/userTypes";
import {selectIsAuth} from "../../redux/auth/selectors";
import {pageSize} from "../../initialValues/initialValues";
import Typography from "@mui/material/Typography";


const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalCountFollowing: number = useSelector(selectTotalCountFollowing);
  const following = useSelector(selectFollowing) as UserType[];
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchFollowing(page));
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.usersMainWrapper}>
      <Typography variant="h5" fontSize={30}>
        Following
      </Typography>

      {totalCountFollowing > 0 &&
        <Pagination
          count={Math.ceil(totalCountFollowing / pageSize)} // Total number of pages
          page={page}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          sx={{m: 2}}
        />
      }

      <div className={styles.usersBlockWrapper}>
        {following?.map((follow: UserType) =>
          <User
            key={follow.id}
            user={follow}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
