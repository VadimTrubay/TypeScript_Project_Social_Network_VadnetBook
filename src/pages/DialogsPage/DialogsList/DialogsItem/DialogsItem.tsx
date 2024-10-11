import React, {useEffect} from "react";
import styles from './DialogsItem.module.css';
import userDefaultLogo from '../../../../components/Other/user.png'
import {NavLink} from "react-router-dom";
import {MdDeleteForever} from "react-icons/md";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {createDialog, deleteDialog} from "../../../../redux/dialogs/operations";
import {fetchUserById} from "../../../../redux/users/operations";
import {mainUrls} from "../../../../config/urls";
import {fetchMessages} from "../../../../redux/messages/operations";
import {selectRefresh} from "../../../../redux/messages/selectors";


export const DialogsItem = ({dialog}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const refresh = useSelector(selectRefresh);

  const handleOpenDialog = () => {
    dispatch(createDialog({
      "users": dialog.other_user.id
    }));
    dispatch(fetchUserById(dialog.other_user.id));
    dispatch(fetchMessages(dialog.id));
  };

  // useEffect(() => {
  //   setInterval(
  //     () => dispatch(fetchMessages(dialog.id)),
  //     15000 // Update messages every 5 seconds
  //   );
  // }, []);

  const handleDeleteDialog = () => {
    dispatch(deleteDialog(dialog.id));
  };

  return (
    <div className={styles.dialogsContainer} onClick={handleOpenDialog}>
      <NavLink
        to={mainUrls.dialogs.dialogs}
        className={styles.dialogsItem}>
        <img className={styles.friendPhoto}
             src={dialog.other_user?.profile_picture ? dialog.other_user?.profile_picture : userDefaultLogo} alt=""/>
        <span>{dialog.other_user?.username}</span>
      </NavLink>
      <Button onClick={handleDeleteDialog}>
        <MdDeleteForever className={styles.deleteDialogIcon} color="0f4fe2" size={25}/>
      </Button>
    </div>
  );
};