// import React, {useEffect, useRef} from "react";
// import styles from "./MessagesList.module.css";
// import {formatDate} from "../../../utils/formatDate";
// import {Link} from "react-router-dom";
// import {useSelector} from "react-redux";
// import {selectUserById} from "../../../redux/users/selectors";
// import defaultUser from "../../../components/Other/user.png";
// import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
// import {selectMessages} from "../../../redux/messages/selectors";
// import {SingleMessage} from "./SingleMessage/SingleMessage";
// import {selectDialogs, selectIdActiveDialog} from "../../../redux/dialogs/selectors";
// import {DialogType} from "../../../types/dialogTypes";
//
// export const MessagesList = () => {
//   const activeChatUserInfo = useSelector(selectUserById);
//   const dialogsMessages = useSelector(selectMessages);
//   const idActiveDialog = useSelector(selectIdActiveDialog);
//   const dialogsList = useSelector<DialogType[]>(selectDialogs);
//
//   const messagesEndRef = useRef<HTMLDivElement | null>(null); // Ссылка на конец списка
//   const messagesWrapperRef = useRef<HTMLDivElement | null>(null); // Ссылка на контейнер сообщений
//
//   // Функция для прокрутки вниз
//   const scrollToBottom = () => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({behavior: "smooth"});
//     }
//   };
//
//   useEffect(() => {
//     scrollToBottom(); // Прокручиваем вниз при каждом изменении сообщений
//   }, [dialogsMessages]);
//
//   return (
//     <>
//       {dialogsList.length !== 0 ? (
//         <div className={styles.messagesList}>
//           <div>
//             <div className={styles.userHeader}>
//               <Link to={`/profile/${activeChatUserInfo?.user.id}`}>
//                 <img
//                   src={
//                     activeChatUserInfo?.profile_picture
//                       ? `https://res.cloudinary.com/dip870vma/${activeChatUserInfo?.profile_picture}`
//                       : defaultUser
//                   }
//                   alt="userPhoto"
//                 />
//               </Link>
//
//               <div className={styles.userInfo}>
//                 <span className={styles.UserName}>
//                   {activeChatUserInfo?.user.username}
//                 </span>
//                 <span className={styles.UserName}>
//                   last seen at{" "}
//                   {formatDate(activeChatUserInfo?.user.date_joined)}
//                 </span>
//               </div>
//             </div>
//             <div
//               className={styles.messagesBlockWrapper}
//               ref={messagesWrapperRef} // Привязка рефа к обёртке
//             >
//               {dialogsMessages.map((message: { id: string }) => (
//                 <SingleMessage key={message.id} message={message}/>
//               ))}
//               {/* Разметка, используемая для прокрутки */}
//               <div ref={messagesEndRef}></div>
//             </div>
//             <AddMessageBlock/>
//           </div>
//         </div>
//       ) : (
//         <div className={styles.noMessagesWrapper}>
//           <span className={styles.noMessages}>no messages</span>
//         </div>
//       )
//             }
//     </>
//   );
// };


import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages, addMessage } from "../../../redux/messages/slice";
import { WebSocketService } from "../../../utils/websocketService";
import { selectMessages } from "../../../redux/messages/selectors";
import AddMessageBlock from "./AddMessageBlock/AddMessageBlock";
import { SingleMessage } from "./SingleMessage/SingleMessage";
import { selectDialogs, selectIdActiveDialog } from "../../../redux/dialogs/selectors";
import { formatDate } from "../../../utils/formatDate";
import { Link } from "react-router-dom";
import defaultUser from "../../../components/Other/user.png";
import styles from "./MessagesList.module.css";
import {selectUserById} from "../../../redux/users/selectors";
import {selectAccessToken} from "../../../redux/auth/selectors";

export const MessagesList = () => {
  const dispatch = useDispatch();
  const activeChatUserInfo = useSelector(selectUserById);
  const dialogsMessages = useSelector(selectMessages);
  const idActiveDialog = useSelector(selectIdActiveDialog);
  const dialogsList = useSelector(selectDialogs);
  const [messages, setMessagesState] = useState([]);
  const wsService = useRef(null);
  const accessToken = useSelector(selectAccessToken);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToBottom(); // Прокручиваем вниз при каждом изменении сообщений
  }, [messages]);

  useEffect(() => {
    // Устанавливаем WebSocket
    wsService.current = new WebSocketService(`ws://localhost:8000/ws/dialogs/${idActiveDialog}/messages/`, accessToken);
  console.log(idActiveDialog)

    // Обработка сообщений от WebSocket
    wsService.current.onMessage((data) => {
      if (data.type === "existing_message") {
        // Загружаем все сообщения при подключении
        dispatch(setMessages(data.message));
        setMessagesState(data.message);
      } else if (data.type === "new_message") {
        // Добавляем новое сообщение в конец списка
        dispatch(addMessage(data.message));
        setMessagesState((prevMessages) => [...prevMessages, data.message]);
      }
    });

    return () => {
      wsService.current.close();
    };
  }, [dispatch, accessToken, idActiveDialog]);

  return (
    <>
      {dialogsList?.length !== 0 ? (
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
                  last seen at {formatDate(activeChatUserInfo?.user.date_joined)}
                </span>
              </div>
            </div>
            <div className={styles.messagesBlockWrapper}>
              {messages.map((message) => (
                <SingleMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef}></div>
            </div>
            <AddMessageBlock wsService={wsService.current} />
          </div>
        </div>
      ) : (
        <div className={styles.noMessagesWrapper}>
          <span className={styles.noMessages}>no messages</span>
        </div>
      )}
    </>
  );
};
