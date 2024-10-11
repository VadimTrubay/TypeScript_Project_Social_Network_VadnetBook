import React from "react";
import styles from './SingleMessage.module.css';
import {formatDate} from "../../../../utils/formatDate";
import readIcon from "../../../../components/Other/read.png";
import defaultUser from "../../../../components/Other/user.png";
import {useDispatch, useSelector} from "react-redux";
import {selectMe} from "../../../../redux/auth/selectors";
import Button from "@mui/material/Button";
import {MdDeleteForever} from "react-icons/md";
import {AppDispatch} from "../../../../redux/store";
import {deleteMessage} from "../../../../redux/messages/operations";
import {selectIdActiveDialog} from "../../../../redux/dialogs/selectors";
import {deleteMessageDataType} from "../../../../types/messageTypes";

export const SingleMessage = ({message}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectMe);
  const idActiveDialog = useSelector(selectIdActiveDialog);


  const handleDeleteMessage = () => {
    const data: deleteMessageDataType = {
      "dialog_id": idActiveDialog,
      "message_id": message.id
    };
    dispatch(deleteMessage(data));
  };

  return (
    <div className={`${styles.message} ${message.sender.id === currentUser.id ? styles.myMessage : ''}`}
         key={message.id}>
      <div className={styles.messageUserInfo}>
        <img src={message.sender?.profile_picture ?
          message.sender?.profile_picture
          : defaultUser}
             alt="userPhoto"/>
      </div>
      <div className={styles.messageWrapper}>
        <span>{message?.content}</span>
      </div>
      <div className={styles.sendDateWrapper}>
        <span>
          <img
            className={styles.readStatus}
            src={readIcon}
            alt=""
          />
        </span>
        <span>{formatDate(message.updated_at)}</span>
        {message.sender.id === currentUser.id &&
          <Button onClick={handleDeleteMessage}>
            <MdDeleteForever className={styles.deleteDialogIcon} color="#0f4fe2" size={25}/>
          </Button>
        }
      </div>
    </div>
  );
};