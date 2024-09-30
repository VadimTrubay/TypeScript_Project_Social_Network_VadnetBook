import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteProfile, fetchMeProfile, setPhotoProfile} from "../../redux/profile/operations";
import {AppDispatch} from "../../redux/store";
import {profileType} from "../../types/profileTypes";
import React from "react";
import styles from './ProfilePage.module.css';
import defaultUser from '../../components/Other/user.png'
import {selectMeProfile} from "../../redux/profile/selectors";
import ProfileStatus from "./Profile/ProfileInfo/ProfleStatus/ProfileStatus";
import EditProfile from "./Profile/ProfileInfo/EditProfile/EditProfile";
import {NavLink, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BaseModalWindow from "../../components/BaseModalWindow/BaseModalWindow";
import {logOut} from "../../redux/auth/operations";
import {RouterEndpoints} from "../../config/routes";
import {selectMe} from "../../redux/auth/selectors";
import {meType} from "../../types/authTypes";


const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const me = useSelector(selectMe) as meType;
  const profile = useSelector(selectMeProfile) as profileType;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [refresh, setRefresh] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [editProfile, setEditeProfile] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);


  useEffect(() => {
    dispatch(fetchMeProfile());
  }, [refresh, dispatch]);

  const onChangedPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);  // Set the photo when selected
    }
  };


  const handleDeleteUser = () => {
    dispatch(deleteProfile());
    dispatch(logOut());
    navigate(RouterEndpoints.signup);
    closeDeleteModal();
  };

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);

  const closeDeleteModal = () => setOpenDeleteModal(false);

  useEffect(() => {
    if (photo) {
      const formData = new FormData();
      formData.append('profile_picture', photo);
      dispatch(setPhotoProfile(formData));
      setPhoto(null);
    }
    setTimeout(() => {
      setRefresh(!refresh)
    }, 2000)
  }, [photo, dispatch]);


  return (
    <div className={styles.profileMainWrapper}>

      {editProfile && <EditProfile
        profile={profile}
        setEditeProfile={setEditeProfile}/>
      }
      <div className={styles.leftBlockWrapper}>
        <div className={styles.photoWrapper}>
          <img className={styles.photo}
               src={profile?.profile_picture ?
                 `https://res.cloudinary.com/dip870vma/${profile?.profile_picture}`
                 : defaultUser}
               alt="UserPhoto"/>
          <>
            <label className={styles.profileChangePhotoButtonLabel}
                   htmlFor="changePhoto">
              Изменить фото
            </label>
            <input className={styles.profileChangePhotoButton}
                   id="changePhoto"
                   type="file"
                   onChange={onChangedPhoto}
                   title=" "
            />
          </>
        </div>
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
        <Typography variant="h5" fontSize={30}>
          Profile
        </Typography>
        <div className={styles.rightContentBlockWrapper}>
          <div>
            <h1 className={styles.UserName}>{profile?.user.username}</h1>
            <div className={styles.profileBox}>
              <span className={styles.title}>Status: </span>
              <div className={styles.userAbout}>
                <ProfileStatus
                  myStatus={profile?.status}
                  editStatus={editStatus}
                  setEditStatus={setEditStatus}
                />
              </div>
            </div>
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
          <div className={styles.buttonBlockWrapper}>
            <Button
              className={styles.editButton}
              onClick={() => {
                setEditeProfile(true)
              }}
              variant="contained"
              startIcon={<EditIcon/>}
              color="primary"
              sx={{marginLeft: 2}}
              style={{textTransform: "none"}}>
              Edit profile
            </Button>
            <Button
              className={styles.deleteButton}
              onClick={handleOpenDeleteModal}
              variant="contained"
              startIcon={<DeleteIcon/>}
              color="error"
              sx={{margin: 2}}
              style={{textTransform: "none"}}>
              Delete profile
            </Button>
          </div>
        </div>
      </div>
      {/* Delete modal */}
      <BaseModalWindow
        openModal={openDeleteModal}
        closeModal={closeDeleteModal}
        style_close={styles.close}
        color_off={"error"}
        style_title={styles.title_delete}
        title={"Delete profile"}
        text={"Are you sure you want to delete this profile?"}
        onSubmit={handleDeleteUser}
        style_done={{color: "red", fontSize: 50}}
      />
    </div>
  );
};

export default ProfilePage;
