import React, { useEffect, useState } from "react";
import styles from "./DialogsPage.module.css";
import { DialogsList } from "./DialogsList/DialogsList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  selectDialogs,
  selectIdActiveDialog,
} from "../../redux/dialogs/selectors";
import { fetchDialogs } from "../../redux/dialogs/operations";
import { DialogType } from "../../types/dialogTypes";
import { MessagesList } from "./MessagesList/MessagesList";
// import { fetchMessages } from "../../redux/messages/operations";

const DialogsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dialogsList = useSelector<DialogType[]>(selectDialogs);
  const idActiveDialog = useSelector(selectIdActiveDialog);
  const [reload, setReload] = useState(true);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     dispatch(fetchDialogs());
  //     // dispatch(fetchMessages(idActiveDialog));
  //     setReload(!reload); // Перезагрузка страницы каждые 5 секунд для получения новых сообщений и диалогов
  //   }, 2000); // Fetch dialogs and messages every 5 seconds
  //
  //   // Функция очистки для очистки интервала при размонтировании компонента
  //   return () => clearInterval(intervalId);
  // }, [reload, idActiveDialog]);

  useEffect(() => {
    dispatch(fetchDialogs());
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     dispatch(fetchDialogs());
  //     setReload(!reload); // Перезагрузка страницы каждые 5 секунд для получения новых сообщений и диалогов
  //   }, 2000); // Fetch dialogs every 5 seconds
  //
  //   // ��ункция очистки для очистки интервала при размонтировании компонента
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className={styles.dialogs}>
      <DialogsList dialogsList={dialogsList} />
      <MessagesList />
    </div>
  );

  return (
    <div className={styles.dialogs}>
      <DialogsList dialogsList={dialogsList} />
      <MessagesList />
    </div>
  );
};

export default DialogsPage;
