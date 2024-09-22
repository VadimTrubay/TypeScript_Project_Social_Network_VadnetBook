import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {selectUsers} from "../../redux/users/selectors.js";
import {fetchUsers} from "../../redux/users/operations.js";
import {AppDispatch} from "../../redux/store";
import {UserType} from "../../types/authTypes";

// import defaultUser from '../../components/Other/user-smalled.png';

const UsersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers) as UserType[];
  // console.log(allUsers)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <ul>
        {users.map(({id, username}) => (
          <li key={id}>
            {/*{id}*/}
            {username}
            {/*{el.photos.small !== null ? el.photos.small : defaultUser}*/}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
