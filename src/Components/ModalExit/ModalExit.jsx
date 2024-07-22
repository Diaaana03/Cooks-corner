import React from "react";
import classes from "./ModalExit.module.css";

export const ModalExit = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modal__content}>
        <h2>Are you sure you wanna leave?</h2>
        <div className={classes.modal__btns}>
          <button onClick={onConfirm} className={classes.confirm_btn}>
            Yes
          </button>
          <button onClick={onClose} className={classes.cancel_btn}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
