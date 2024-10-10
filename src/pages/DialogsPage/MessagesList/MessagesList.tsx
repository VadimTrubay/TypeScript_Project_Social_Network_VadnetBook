import React, {useEffect} from "react";
import styles from './MessagesList.module.css';
import defaultUserPhoto from '../../../components/Other/user.png'
import {formatDate} from "../../../utils/formatDate";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserById} from "../../../redux/users/selectors";
import defaultUser from "../../../components/Other/user.png";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
import {selectMessages} from "../../../redux/messages/selectors";
import {SingleMessage} from "./SingleMessage/SingleMessage";
import {selectRefresh} from "../../../redux/messages/selectors";
import {fetchMessages} from "../../../redux/messages/operations";


export const MessagesList = () => {
  const activeChatUserInfo = useSelector(selectUserById);
  const dialogsMessages = useSelector(selectMessages);


  // let seenUserData = null;
  // if (activeChatUserInfo) {
  //   seenUserData = (new Date(activeChatUserInfo.lastUserActivityDate)).toString();
  // }

  // const scrollToBottom = () => {
  //   if (messagesEndRef.current && currentMessagePage === 1) {
  //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // useEffect(scrollToBottom, [dialogsMessages]);

  return (
    <div className={styles.messagesList}>
      {/*{currentChatUserId && activeChatUserInfo ?*/}
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
        <div className={styles.messagesBlockWrapper}
          // onClick={() => {toggleChatsMenu(false)}}
        >
          {/*{dialogsMessages.length < 10 ? '' : <button className={styles.getOldMessageButton} onClick={() => getNewPortionOldMessages(currentChatUserId, currentMessagePage + 1)}>get old messages</button>}*/}
          {dialogsMessages.map(message =>
            <SingleMessage
              key={message.id}
              message={message}/>)}
          <AddMessageBlock/>
        </div>
      </div>
      {/*:*/}
      {/*  <div className={styles.noMessages}>*/}
      {/*    <div>*/}
      {/*      <span>No active dialogues</span>*/}
      {/*      <span>select dialogue on the left</span>*/}
      {/*      <button className={styles.goChatButton}>Select chat</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*}*/}
    </div>
  )
};