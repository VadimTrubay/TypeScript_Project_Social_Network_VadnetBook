import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../redux/users/selectors";
import {useEffect} from "react";
import {fetchUsers} from "../../redux/users/operations"

const Users = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectUsers);
  console.log(allUsers)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {allUsers.map((el) => (
          <li key={el.id}>
            {el.name}
            {el.photos.small}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
