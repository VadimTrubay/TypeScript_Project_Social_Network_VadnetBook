import React from "react";
import styles from './MessagesList.module.css';
import {formatDate} from "../../../utils/formatDate";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserById} from "../../../redux/users/selectors";
import defaultUser from "../../../components/Other/user.png";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
import {selectMessages} from "../../../redux/messages/selectors";
import {SingleMessage} from "./SingleMessage/SingleMessage";
import {selectIdActiveDialog} from "../../../redux/dialogs/selectors";


export const MessagesList = () => {
  const activeChatUserInfo = useSelector(selectUserById);
  const dialogsMessages = useSelector(selectMessages);
  const idActiveDialog = useSelector(selectIdActiveDialog);


  return (
    <>
      {idActiveDialog &&
        <div className={styles.messagesList}>
          <div>
            <div className={styles.userHeader}>
              <Link to={`/profile/${activeChatUserInfo?.user.id}`}>
                <img src={activeChatUserInfo?.profile_picture ?
                  `https://res.cloudinary.com/dip870vma/${activeChatUserInfo?.profile_picture}`
                  : defaultUser}
                     alt="userPhoto"/>
              </Link>


              <div className={styles.userInfo}>
                <span className={styles.UserName}>{activeChatUserInfo?.user.username}</span>
                <span className={styles.UserName}>last seen at {formatDate(activeChatUserInfo?.user.date_joined)}</span>
              </div>
            </div>
            <div className={styles.messagesBlockWrapper}>
              {dialogsMessages.map((message: { id: string }) =>
                <SingleMessage
                  key={message.id}
                  message={message}
                />)
              }
              <AddMessageBlock/>
            </div>
          </div>
        </div>
      }
    </>
  )
};