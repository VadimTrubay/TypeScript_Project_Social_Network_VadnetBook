import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors.js";


export const PrivateRoute = ({component: Component, redirectTo = "/login"}) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? Component : <Navigate to={redirectTo}/>;
};
