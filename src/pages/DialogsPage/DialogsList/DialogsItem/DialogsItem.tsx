import React from "react";
import styles from './DialogsItem.module.css';
import userDefaultLogo from '../../../../components/Other/user.png'
import {NavLink} from "react-router-dom";
import {MdDeleteForever} from "react-icons/md";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {deleteDialog} from "../../../../redux/dialogs/operations";


export const DialogsItem = ({dialog}: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteDialog = () => {
    dispatch(deleteDialog(dialog.id));
  };

  return (
    <div className={styles.dialogsContainer}>
      <NavLink onClick={
        () => {
          dialog.toggleChatsMenu(false)
        }}
               to={"/dialogs/" + dialog.id}
               className={NavData => NavData.isActive ? (styles.dialogsItem + ' ' + styles.active) : styles.dialogsItem}>
        <img className={styles.friendPhoto}
             src={dialog.other_user?.profile_picture ? dialog.other_user?.profile_picture : userDefaultLogo} alt=""/>
        <span>{dialog.other_user?.username}</span>
      </NavLink>
      <Button onClick={handleDeleteDialog}>
        <MdDeleteForever className={styles.deleteDialogIcon} color="red" size={25}/>
      </Button>
    </div>
  );
};