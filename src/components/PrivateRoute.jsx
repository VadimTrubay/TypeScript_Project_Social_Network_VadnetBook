import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors";

export const PrivateRoute = ({component: Component, redirectTo: redirectTo}) => {
  const IsAuth = useSelector(selectIsAuth);

  return IsAuth ? Component : <Navigate to={redirectTo}/>;
};
