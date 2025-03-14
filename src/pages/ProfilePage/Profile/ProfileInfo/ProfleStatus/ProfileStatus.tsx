import React, { useEffect, useState } from 'react';
import styles from './ProfleStatus.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store';
import { setStatusProfile } from '../../../../../redux/profile/operations';
import EditIcon from '@mui/icons-material/Edit';

const ProfileStatus = ({ myStatus, editStatus, setEditStatus }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [status, setStatus] = useState(myStatus);

  useEffect(() => {
    setStatus(myStatus);
  }, [myStatus]);

  const activateEditStatus = () => {
    setEditStatus(true);
  };

  const deactivateEditStatus = () => {
    dispatch(
      setStatusProfile({
        status: status,
      })
    );
    setEditStatus(false);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {editStatus ? (
        <div className={styles.statusWrapper}>
          <input
            className={styles.inputChangeStatus}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditStatus}
            type="text"
            value={status}
          />
        </div>
      ) : (
        <div className={styles.statusWrapper}>
          <span className={styles.status} onClick={activateEditStatus}>
            {myStatus ? myStatus : ''}
          </span>
          <EditIcon color={'primary'} />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
