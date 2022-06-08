import { forwardRef } from "react";
import classes from "./style.module.css";

export const Input = forwardRef(({ label, id, type, validate }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} type={type} {...validate} />
    </div>
  );
});
