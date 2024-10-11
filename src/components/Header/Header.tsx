import React, {useEffect, useState} from "react";
import styles from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import SearchBar from '@mkyy/mui-search-bar';
import logo from './../Other/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../../redux/auth/selectors.js";
import {fetchMe, logOut} from "../../redux/auth/operations.js";
import {AppDispatch} from "../../redux/store";
import {RouterEndpoints} from "../../config/routes";
import {mainUrls} from "../../config/urls";
import Button from "@mui/material/Button";
import {selectMeProfile} from "../../redux/profile/selectors";
import defaultImage from "../../components/Other/user-smalled.png"
import {fetchUsers} from "../../redux/users/operations";
import LogoutIcon from '@mui/icons-material/Logout';
import {Login} from "@mui/icons-material";


const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectMeProfile);
  const isAuth = useSelector(selectIsAuth);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const handleSearch = () => {
    const usersParams = {
      search: search,
      page: 1
    }
    dispatch(fetchUsers(usersParams));
    setSearch("");
    navigate(`${RouterEndpoints.users}`);
  }

  return (
    <header className={styles.header}>
      <NavLink to={'/users'} className={styles.navLinkHeaderLogoWrapper}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <div className={styles.headerSocialTitleWrapper}>
          <span className={styles.headerSocialName}>VadnetBook</span>
          <span className={styles.headerSocialSubname}>Social Network</span>
        </div>
      </NavLink>

      <div>
        <SearchBar
          value={search}
          onChange={newValue => setSearch(newValue)}
          onSearch={handleSearch}
          onCancelResearch={() => setSearch("")}
        />
      </div>

      <div>
        {isAuth ? <div className={styles.loginWrapper}>
            <NavLink className={styles.loggedUserLink} to={mainUrls.profile.profile}>
              <div className={styles.loggedUserWrapper}>
                <span className={styles.loginName}>{user.user?.username}</span>
                <div className={styles.loginLogoWrapper}>
                  <div className={styles.loginLogoWrapperOverflow}>
                    <img
                      className={styles.userImg}
                      alt={user?.username}
                      src={user?.profile_picture ?
                        `https://res.cloudinary.com/dip870vma/${user?.profile_picture}`
                        :
                        defaultImage}/>
                  </div>
                </div>
              </div>
            </NavLink>
            <Button
              className={styles.logoutButton}
              variant="contained"
              onClick={() => {dispatch(logOut())}}
              style={{textTransform: "none"}}
              endIcon={<LogoutIcon/>}
            >
              LogOut
            </Button>
          </div> :
          <NavLink to={RouterEndpoints.signin}>
            <Button
              className={styles.logoutButton}
              variant="contained"
              style={{textTransform: "none"}}
              endIcon={<Login/>}
            >
              SignIn
            </Button>
          </NavLink>
        }

        {/*<ModalButton burgerMenuStatus={props.burgerMenuStatus}*/}
        {/*             switchBurgerMenuStatus={props.switchBurgerMenuStatus}></ModalButton>*/}
      </div>
    </header>
  );
}

export default Header;
