import React from "react";
import classes from "./ModalAdd.module.css";

export const ModalAdd = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal__content}>
        <h2>Create a new recipe</h2>
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
