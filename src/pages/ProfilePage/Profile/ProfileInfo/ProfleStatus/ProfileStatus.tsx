import React, {useEffect, useState} from "react";
import styles from './ProfleStatus.module.css'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../../redux/store";
import {setStatusProfile} from "../../../../../redux/profile/operations";


const ProfileStatus = ({myStatus, editMode, setEditMode}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  let [status, setStatus] = useState(myStatus);

  useEffect(() => {
    setStatus(myStatus)
  }, [myStatus])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    dispatch(setStatusProfile({
      status: status,
    }));
    setEditMode(false);
  }

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setStatus(e.currentTarget.value);
};

  return <>
    {editMode ?
      <div className={styles.statusWrapper}>
        <input className={styles.inputChangeStatus}
               onChange={onStatusChange}
               autoFocus={true}
               onBlur={deactivateEditMode}
               type="text"
               value={status}
        />
      </div> :
      <div className={styles.statusWrapper}>
          <span className={styles.status}
                onClick={activateEditMode}>
            {myStatus ? myStatus : ''}

          </span>
        <span className={styles.editButton}>
              edit
            </span>
      </div>
    }
  </>
}

export default ProfileStatus;