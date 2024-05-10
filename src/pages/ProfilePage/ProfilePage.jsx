import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectMe} from "../../redux/auth/selectors.js";
import {getMe} from "../../redux/auth/operations.js";


const ProfilePage = () => {
  const dispatch = useDispatch();
  const {email, login} = useSelector(selectMe);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <div>
      <ul>
        <li>
          {email}
        </li>
        <li>
          {login}
        </li>
      </ul>
    </div>
  )
}

export default ProfilePage