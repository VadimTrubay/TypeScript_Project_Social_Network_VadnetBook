import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectIsAuth, selectMeProfile} from "../../redux/auth/selectors";
import {fetchMeProfile} from "../../redux/auth/operations";
import {AppDispatch} from "../../redux/store";
import {profileType} from "../../types/authTypes";
import defaultImg from "../../components/Other/user-smalled.png";
import React from "react";
import styles from './ProfilePage.module.css';
import defaultUser from '../../components/Other/user.png'
// import ProfileStatusWithHooks from "./ProfleStatus/ProfileStatusWithHooks";
// import ContactsInfoBlock from "./ContactsInfoBlock/ContactsInfoBlock";
// import EditUserProfileModal from "./EditUserProfileModal/EditUserProfileModal";
// import {Link} from "react-router-dom";


const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector(selectMeProfile) as profileType;
  const isAuth = useSelector<boolean>(selectIsAuth);




  useEffect(() => {
    dispatch(fetchMeProfile());
  }, [dispatch]);

  return (
    <div className={styles.profileMainWrapper}>
      {/*{(isAuth && loggedUserId === profile.userId && editUserMode) ?*/}
      {/*  <EditUserProfileModal profile={profile}*/}
      {/*                        editUserInfo={editUserInfo}*/}
      {/*                        sendUserDataStatus={sendUserDataStatus}*/}
      {/*                        setEditUserMode={setEditUserMode}*/}
      {/*                        setSendUserDataStatus={setSendUserDataStatus}*/}
      {/*                        isGeneralSendUserDataError={isGeneralSendUserDataError}*/}
      {/*                        isGeneralSendUserDataErrorMessage={isGeneralSendUserDataErrorMessage}/> : ''*/}
      {/*}*/}
      <div className={styles.leftBlockWrapper}>
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={profile?.profile_picture ? `https://res.cloudinary.com/dip870vma/${profile?.profile_picture}`: defaultUser}
               alt="UserPhoto"/>
          {isAuth ?
            <>
            <label className={styles.profileChangePhotoButtonLabel} htmlFor={"changePhoto"}>Изменить фото</label>
            <input className={styles.profileChangePhotoButton}
                   id={"changePhoto"}
                   type={"file"}
                   // onChange={onChangedPhoto}
                   title={" "}
                   accept={"image/*"}/>
          </> : ''}
        </div>

        <div className={styles.contactsWrapper}>
          {/*{isAuth ?*/}
          {/*  <Link to={`/dialogs/${profile.userId}`} className={styles.goChatButton}>Go to chat</Link> : ''*/}
          {/*}*/}
          <div className={styles.contactsTitle}>Contacts:</div>
          {/*<ContactsInfoBlock fullContactsArray={profile.contacts}/>*/}
        </div>
      </div>
      <div className={styles.rightBlockWrapper}>
        {isAuth  ? <button className={styles.editButton} onClick={() => {
          // setEditUserMode(true)
        }}>Редактировать профиль</button> : ''}
        <h1 className={styles.UserName}>{profile?.user?.first_name}</h1>

        {/*{isAuth ? <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isAuth={isAuth}/> :*/}
          <span>{profile?.status}</span>


        <span className={styles.userAbout}>About me: {profile?.about_me}</span>

        {profile?.looking_from_job ?
          <div className={styles.jobBlockWrapper}>
              <span
                className={styles.jobStatus}><b>Job status:</b> {profile?.looking_from_job ? 'В поиске работы' :
                !profile.looking_from_job ? 'Уже работаю' :
                  'Не указано'}</span>
            {profile.job_skills ? <span
              className={styles.jobDescription}><b>Job info:</b> {profile?.job_skills}</span> : ''}
          </div>
          : ''}

      </div>
    </div>
  )
}

export default ProfilePage;
{/*<div>*/
}
{/*  <h1>Profile</h1>*/
}
{/*  {profile ? (*/
}
{/*    <ul>*/
}
{/*      <li><strong>Profile Picture:</strong>*/
}
{/*        <img*/
}
{/*          src={profile.profile_picture ? `https://res.cloudinary.com/dip870vma/${profile?.profile_picture}` : defaultImg}*/
}
{/*          alt="Profile" width={100}/>*/
}
{/*      </li>*/
}
{/*      <li><strong>Username:</strong> {profile.user.username}</li>*/
}
{/*      <li><strong>Email:</strong> {profile.user.email}</li>*/
}
{/*      <li><strong>Status:</strong> {profile.status}</li>*/
}
{/*      <li><strong>First Name:</strong> {profile.user.first_name}</li>*/
}
{/*      <li><strong>Last Name:</strong> {profile.user.last_name}</li>*/
}
{/*      <li><strong>Birth Date:</strong> {profile.birth_date}</li>*/
}
{/*      <li><strong>Looking for Job:</strong> {profile.looking_from_job ? 'Yes' : 'No'}</li>*/
}
{/*      <li><strong>Phone Number:</strong> {profile.phone_number}</li>*/
}

{/*      <li><strong>GitHub Page:</strong> {profile.github_page || 'N/A'}</li>*/
}
{/*      <li><strong>LinkedIn Page:</strong> {profile.linkedin_page || 'N/A'}</li>*/
}
{/*      <li><strong>Job Skills:</strong> {profile.job_skills || 'N/A'}</li>*/
}
{/*      <li><strong>About Me:</strong> {profile.about_me || 'N/A'}</li>*/
}
{/*    </ul>*/
}
{/*  ) : (*/
}
{/*    <p>Loading profile...</p>*/
}
{/*  )}*/
}
{/*</div>*/
}
