import React, {useEffect, useRef} from "react";
import styles from "./MessagesList.module.css";
import {formatDate} from "../../../utils/formatDate";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserById} from "../../../redux/users/selectors";
import defaultUser from "../../../components/Other/user.png";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
import {selectMessages} from "../../../redux/messages/selectors";
import {SingleMessage} from "./SingleMessage/SingleMessage";
import {selectDialogs, selectIdActiveDialog} from "../../../redux/dialogs/selectors";
import {DialogType} from "../../../types/dialogTypes";

export const MessagesList = () => {
  const activeChatUserInfo = useSelector(selectUserById);
  const dialogsMessages = useSelector(selectMessages);
  const idActiveDialog = useSelector(selectIdActiveDialog);
  const dialogsList = useSelector<DialogType[]>(selectDialogs);

  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Ссылка на конец списка
  const messagesWrapperRef = useRef<HTMLDivElement | null>(null); // Ссылка на контейнер сообщений

  // Функция для прокрутки вниз
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  useEffect(() => {
    scrollToBottom(); // Прокручиваем вниз при каждом изменении сообщений
  }, [dialogsMessages]);

  return (
    <>
      {dialogsList.length !== 0 ? (
        <div className={styles.messagesList}>
          <div>
            <div className={styles.userHeader}>
              <Link to={`/profile/${activeChatUserInfo?.user.id}`}>
                <img
                  src={
                    activeChatUserInfo?.profile_picture
                      ? `https://res.cloudinary.com/dip870vma/${activeChatUserInfo?.profile_picture}`
                      : defaultUser
                  }
                  alt="userPhoto"
                />
              </Link>

              <div className={styles.userInfo}>
                <span className={styles.UserName}>
                  {activeChatUserInfo?.user.username}
                </span>
                <span className={styles.UserName}>
                  last seen at{" "}
                  {formatDate(activeChatUserInfo?.user.date_joined)}
                </span>
              </div>
            </div>
            <div
              className={styles.messagesBlockWrapper}
              ref={messagesWrapperRef} // Привязка рефа к обёртке
            >
              {dialogsMessages.map((message: { id: string }) => (
                <SingleMessage key={message.id} message={message}/>
              ))}
              {/* Разметка, используемая для прокрутки */}
              <div ref={messagesEndRef}></div>
            </div>
            <AddMessageBlock/>
          </div>
        </div>
      ) : (
        <div className={styles.noMessagesWrapper}>
          <span className={styles.noMessages}>no messages</span>
        </div>
      )
            }
    </>
  );
};
