import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors";

export const PublicRoute = ({component: Component, redirectTo = "/"}) => {
  const selectedIsAuth = useSelector(selectIsAuth);

  return selectedIsAuth ? <Navigate to={redirectTo}/> : Component;
};
