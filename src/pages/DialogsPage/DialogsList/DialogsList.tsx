import React from "react";
import styles from './DialogsList.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Link} from "react-router-dom";
import {DialogType} from "../../../types/dialogTypes";

export const DialogsList = (dialogsList: any) => {


  return (
    <div className={`${styles.dialogsList} ${dialogsList.showChatsMenu ? styles.dialogsListShow : ''}`}>
      {
        dialogsList.dialogsList?.length !== 0 ?
        dialogsList.dialogsList.map((dialog: DialogType) =>
          <DialogsItem
            key={dialog.id}
            dialog={dialog}
          />)
        :
        <div className={styles.noDialoguesWrapper}>
          <span className={styles.noDialogues}>no active dialogues</span>
          <span className={styles.noDialogues}><Link to={'/friends'}>write</Link> your first message</span>
        </div>}
    </div>
  );
};