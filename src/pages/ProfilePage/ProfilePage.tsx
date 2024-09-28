import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {selectIsAuth} from "../../redux/auth/selectors";
import {fetchMeProfile} from "../../redux/profile/operations";
import {AppDispatch} from "../../redux/store";
import {profileType} from "../../types/profileTypes";
import React from "react";
import styles from './ProfilePage.module.css';
import defaultUser from '../../components/Other/user.png'
import {selectMeProfile} from "../../redux/profile/selectors";
import ProfileStatus from "./Profile/ProfileInfo/ProfleStatus/ProfileStatus";
import {setPhotoProfileApi} from "../../api/apiProfile";
import EditProfile from "./Profile/ProfileInfo/EditProfile/EditProfile";
import {Link, NavLink} from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector(selectMeProfile) as profileType;
  const isAuth = useSelector<boolean>(selectIsAuth);
  const [editStatus, setEditStatus] = useState(false);
  const [editProfile, setEditeProfile] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false); // State to handle uploading process
  const [error, setError] = useState<string | null>(null); // State to handle errors

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchMeProfile());
    }
  }, [photo, editProfile, editStatus, uploading, isAuth, dispatch]);

  const onChangedPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);  // Set the photo when selected
    }
  };

  useEffect(() => {
    if (photo) {
      const formData = new FormData();
      formData.append('profile_picture', photo);

      const uploadPhoto = async () => {
        setUploading(true);
        setError(null);  // Clear previous error if any
        // @ts-ignore
        await dispatch(setPhotoProfileApi(formData));
        setUploading(false);
        setPhoto(null);  // Clear the selected photo after uploading
      };
      uploadPhoto();
    }
  }, [photo, uploading, dispatch]);

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
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
        <div className={styles.contactsWrapper}>
          <div className={styles.contactsTitle}>Contacts:</div>
          <div><span className={styles.contactsTitle}>Website: </span>
            <NavLink to={profile?.website_page}>
              {profile?.website_page}
            </NavLink>
          </div>
          <div><span className={styles.contactsTitle}>Github: </span>
            <NavLink to={profile?.github_page}>
              {profile?.github_page}
            </NavLink>
          </div>
          <div><span className={styles.contactsTitle}>Linkedin: </span>
            <NavLink to={profile?.linkedin_page}>
              {profile?.linkedin_page}
            </NavLink>
          </div>
        </div>
      </div>

      <div className={styles.rightBlockWrapper}>
        <button className={styles.editButton}
                onClick={() => {
                  setEditeProfile(true)
                }}>
          Редактировать профиль
        </button>
        <h1 className={styles.UserName}>{profile?.user.username}</h1>
        <span className={styles.contactsTitle}>Status: </span>
        <div className={styles.userAbout}>
          <ProfileStatus
            myStatus={profile?.status}
            editStatus={editStatus}
            setEditStatus={setEditStatus}
          />
        </div>
        <div className={styles.contactsTitle}>First name: <span>{profile?.user.first_name}</span></div>
        <div className={styles.contactsTitle}>Last name: {profile?.user.last_name}</div>
        <div className={styles.contactsTitle}>About me: {profile?.about_me}</div>
        <div className={styles.contactsTitle}>Birth date: {profile?.birth_date}</div>
        <div className={styles.contactsTitle}>Phone number: {profile?.phone_number}</div>

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
