import React, {useEffect} from "react";
import styles from "./DialogsPage.module.css";
import {DialogsList} from "./DialogsList/DialogsList";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {selectDialogs, selectIdActiveDialog} from "../../redux/dialogs/selectors";
import {fetchDialogs} from "../../redux/dialogs/operations";
import {DialogType} from "../../types/dialogTypes";
import {MessagesList} from "./MessagesList/MessagesList";
import {fetchMessages} from "../../redux/messages/operations";


const DialogsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dialogsList = useSelector<DialogType[]>(selectDialogs);
  const idActiveDialog = useSelector(selectIdActiveDialog);


  useEffect(() => {
    dispatch(fetchMessages(idActiveDialog));
    dispatch(fetchDialogs())
  }, []);

  return (
    <div className={styles.dialogs}>
      <DialogsList
        dialogsList={dialogsList}
      />
      <MessagesList/>
    </div>
  );
};


export default DialogsPage;
