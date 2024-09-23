import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectMeProfile} from "../../redux/auth/selectors";
import {fetchMeProfile} from "../../redux/auth/operations";
import {AppDispatch} from "../../redux/store";
import {profileType} from "../../types/authTypes";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector(selectMeProfile) as profileType;

  useEffect(() => {
    dispatch(fetchMeProfile());
  }, [dispatch]);

  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <ul>
          <li><strong>Username:</strong> {profile.username}</li>
          <li><strong>Email:</strong> {profile.email}</li>
          <li><strong>Status:</strong> {profile.status}</li>
          <li><strong>First Name:</strong> {profile.first_name}</li>
          <li><strong>Last Name:</strong> {profile.last_name}</li>
          <li><strong>Birth Date:</strong> {profile.birth_date}</li>
          <li><strong>Looking for Job:</strong> {profile.looking_from_job ? 'Yes' : 'No'}</li>
          <li><strong>Phone Number:</strong> {profile.phone_number}</li>
          <li><strong>Profile Picture:</strong>
            <img src={profile.profile_picture} alt="Profile" width={100}/>
          </li>
          <li><strong>GitHub Page:</strong> {profile.github_page || 'N/A'}</li>
          <li><strong>LinkedIn Page:</strong> {profile.linkedin_page || 'N/A'}</li>
          <li><strong>Job Skills:</strong> {profile.job_skills || 'N/A'}</li>
          <li><strong>About Me:</strong> {profile.about_me || 'N/A'}</li>
        </ul>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default ProfilePage;
