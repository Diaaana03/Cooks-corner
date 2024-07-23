import React from "react";
import classes from "./ModalAdd.module.css";

export const ModalAdd = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={classes.modal__add}>
      <div className={classes.modal__content__add}>
        <h2>Create a new recipe</h2>
        <div className={classes.modal__btns__add}>
          <button onClick={handleConfirm} className={classes.confirm_btn_add}>
            Yes
          </button>
          <button onClick={onClose} className={classes.cancel_btn_add}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
