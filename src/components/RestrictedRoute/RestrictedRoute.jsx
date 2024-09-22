import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "@/redux/auth/selectors.js";

export const RestrictedRoute = ({component: Component, redirectTo = "/"}) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={redirectTo}/> : Component;
};
