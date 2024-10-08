import React, {useEffect, useState} from "react";
import styles from "./DialogsPage.module.css";
import {DialogsList} from "./DialogsList/DialogsList";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {selectDialogs} from "../../redux/dialogs/selectors";
import {fetchDialogs} from "../../redux/dialogs/operations";
import {DialogType} from "../../types/dialogTypes";
import {MessagesList} from "./MessagesList/MessagesList";

const DialogsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dialogsList = useSelector<DialogType[]>(selectDialogs);
  const [showChatsMenu, toggleChatsMenu] = useState(false);


  useEffect(() => {
    dispatch(fetchDialogs())
  }, [dispatch]);


  // useEffect(() => {
  //   if ((!userId && !currentChatUserId) || (!userId && currentChatUserId)) {
  //     setCurrentChatUserId(null) // clear current chat when user go to main dialogs page (without userId param in URL)
  //   } else {
  //     setCurrentChatUserId(userId);
  //     startChatting(userId)
  //   }
  // }, [userId])

  return (
    <div className={styles.dialogs}>
      <DialogsList
        dialogsList={dialogsList}
        showChatsMenu={showChatsMenu}
        toggleChatsMenu={toggleChatsMenu}
      />
      <MessagesList/>
    </div>
  );
};


export default DialogsPage;
