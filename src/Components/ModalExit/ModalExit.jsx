import React from "react";
import classes from "./ModalExit.module.css";

export const ModalExit = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={classes.modal__exit}>
      <div className={classes.modal__content}>
        <h2 className={classes.h2__exit}>Are you sure you want to leave?</h2>
        <div className={classes.modal__btns}>
          <button onClick={handleConfirm} className={classes.confirm_btn}>
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
