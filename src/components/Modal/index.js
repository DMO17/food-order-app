import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./style.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children} </div>
    </div>
  );
};

export const Modal = ({ children }) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};
