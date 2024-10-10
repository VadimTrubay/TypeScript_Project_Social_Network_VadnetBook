import React from "react";
import styles from './SingleMessage.module.css';
import user from '../../../../components/Other/user.png';
import {formatDate} from "../../../../utils/formatDate";
import sendedIcon from "../../../../components/Other/sended.png";
import readIcon from "../../../../components/Other/read.png";
import defaultUser from "../../../../components/Other/user.png";

export const SingleMessage = ({message}) => {


  return (
    // <div className={`${styles.message} ${+currentChatUserId !== +senderId ? styles.myMessage : ''}`} key={id}>
    <div className={styles.message}>
      <div className={styles.messageUserInfo}>
        {/*<img src={+currentChatUserId === +senderId ? activeChatUserPhoto : loggedUser} alt="user photo"/>*/}
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
      </div>
    </div>
  );
};