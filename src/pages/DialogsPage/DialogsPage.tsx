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


  useEffect(() => {
    dispatch(fetchDialogs())
  }, [dispatch]);


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
