import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../redux/users/selectors";
import {useEffect} from "react";
import {fetchUsers} from "../../redux/users/operations"
import defaultUser from '../../components/Other/user-smalled.png';

const UsersPage = () => {
  const dispatch = useDispatch();
  const selectedUsers = useSelector(selectUsers);
  // console.log(allUsers)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {selectedUsers.map(({id, name}) => (
          <li key={id}>
            {/*{id}*/}
            {name}
            {/*{el.photos.small !== null ? el.photos.small : defaultUser}*/}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
