import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors";

export const PublicRoute = ({component: Component, redirectTo = "/users"}) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={redirectTo}/> : Component;
};
