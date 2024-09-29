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
import {fetchSearchUsers} from "../../redux/users/operations";
import {selectRefresh} from "../../redux/users/selectors";
import defaultImage from "../../components/Other/user-smalled.png"

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectMeProfile);
  const isAuth = useSelector(selectIsAuth);
  const [search, setSearch] = useState("");
  const isRefresh = useSelector<boolean>(selectRefresh);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMe());
  }, [isAuth, dispatch]);

  useEffect(() => {
    handleSearch();
  }, [isRefresh]);


  const handleSearch = () => {
    const searchUsersData = {
      page: 1,
      q: search
    }
    dispatch(fetchSearchUsers(searchUsersData));
    setSearch("");
    navigate(`${RouterEndpoints.searchUsers}`);
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
            <Button className={styles.logoutButton} variant="contained" onClick={() => {
              dispatch(logOut());
            }}>LogOut
            </Button>
          </div> :
          <NavLink to={RouterEndpoints.signin}>
            <Button
              className={styles.logoutButton}
              variant="contained"
              style={{textTransform: "none"}}>
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
