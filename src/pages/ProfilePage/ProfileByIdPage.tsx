import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {AppDispatch} from "../../redux/store";
import {profileType} from "../../types/profileTypes";
import React from "react";
import styles from './ProfilePage.module.css';
import defaultUser from '../../components/Other/user.png'
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {selectUserById} from "../../redux/users/selectors";
import {fetchUserById} from "../../redux/users/operations";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import RateReviewIcon from '@mui/icons-material/RateReview';
import {createDialog} from "../../redux/dialogs/operations";
import {mainUrls} from "../../config/urls";
import {selectIsAuth, selectMe} from "../../redux/auth/selectors";


const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {id} = useParams<{ id: string }>();
  const me = useSelector(selectMe);
  const isAuth = useSelector(selectIsAuth);
  const profile = useSelector(selectUserById) as profileType;
  const navigate = useNavigate();


  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(id));
    }
  }, [id, dispatch]);

  const handleCreateDialog = () => {
    dispatch(createDialog({
      "users": id
    }));
    // @ts-ignore
    dispatch(fetchUserById(id));
    navigate(mainUrls.dialogs.dialogs);
  }

  // @ts-ignore
  return (
    <div className={styles.profileMainWrapper}>
      <div className={styles.leftBlockWrapper}>
        <div className={styles.photoWrapper}>
          <img className={styles.photo}
               src={profile?.profile_picture ?
                 `https://res.cloudinary.com/dip870vma/${profile?.profile_picture}`
                 : defaultUser}
               alt="UserPhoto"/>
        </div>

        {isAuth && profile?.user?.id !== me?.id && profile?.is_friend ?
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                onClick={handleCreateDialog}
                size="large"
                variant="contained"
                startIcon={<RateReviewIcon/>}
                sx={{marginTop: 1, marginBottom: 1}}
              >
                Go to chat
              </Button>
            </Grid>
          </Grid>
          :
          null
        }

        <div className={styles.contactsWrapper}>
          <div className={styles.contactsTitle}>Contacts:</div>
          <div><span className={styles.title}>Website: </span>
            <NavLink to={`${profile?.website_page}`}>
              {profile?.website_page}
            </NavLink>
          </div>
          <div><span className={styles.title}>Github: </span>
            <NavLink to={`${profile?.github_page}`}>
              {profile?.github_page}
            </NavLink>
          </div>
          <div><span className={styles.title}>Linkedin: </span>
            <NavLink to={`${profile?.linkedin_page}`}>
              {profile?.linkedin_page}
            </NavLink>
          </div>
        </div>
      </div>

      <div className={styles.rightBlockWrapper}>
        <h1 className={styles.UserName}>{profile?.user.username}</h1>
        <span className={styles.title}>Status: </span>
        <div className={styles.userAbout}>{profile?.status}</div>
        <div className={styles.title}>First name: <span>{profile?.user.first_name}</span></div>
        <div className={styles.title}>Last name: {profile?.user.last_name}</div>
        <div className={styles.title}>About me: {profile?.about_me}</div>
        <div className={styles.title}>Birth date: {profile?.birth_date}</div>
        <div className={styles.title}>Phone number: {profile?.phone_number}</div>

        {profile?.looking_from_job && (
          <div className={styles.jobBlockWrapper}>
            <span className={styles.jobStatus}>
              <b>Job status:</b> {profile.looking_from_job ?
              'В поиске работы' : 'Уже работаю'}
            </span>
            {profile.job_skills && (
              <span className={styles.jobDescription}>
                <b>Job info:</b> {profile.job_skills}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
