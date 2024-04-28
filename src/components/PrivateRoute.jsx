import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors";

export const PrivateRoute = ({component: Component, redirectTo = "/users"}) => {
  const selectedIsAuth = useSelector(selectIsAuth);

  return selectedIsAuth ? Component : <Navigate to={redirectTo}/>;
};
