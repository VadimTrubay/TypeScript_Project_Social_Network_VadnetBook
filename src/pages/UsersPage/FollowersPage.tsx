import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFollowers} from "../../redux/users/operations.js";
import {AppDispatch} from "../../redux/store";
import User from "./User/User";
import {Pagination} from "@mui/material";
import styles from "./Users.module.css";
import {
  selectFollowers,
  selectTotalCountFollowers,
} from "../../redux/users/selectors";
import {pageSize} from "../../initialValues/initialValues";
import Typography from "@mui/material/Typography";
import {UserType} from "../../types/userTypes";
import {NoResults} from "../../components/NoResults/NoResults";

const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const followers = useSelector(selectFollowers) as UserType[];
  const totalCountFollowers: number = useSelector(selectTotalCountFollowers);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchFollowers(page));
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  return (
    <>
      {followers.length === 0 ? <NoResults/> :
        <div className={styles.usersMainWrapper}>
          <Typography variant="h5" fontSize={30}>
            Followers
          </Typography>

          {totalCountFollowers > 0 && (
            <Pagination
              count={Math.ceil(totalCountFollowers / pageSize)} // Total number of pages
              page={page}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              sx={{m: 2}}
            />
          )}

          <div className={styles.usersBlockWrapper}>
            {followers?.map((follower: UserType) => (
              <User key={follower.id} user={follower}/>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default UsersPage;
