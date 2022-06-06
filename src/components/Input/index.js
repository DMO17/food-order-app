import classes from "./style.module.css";

export const Input = ({ label, id, type, validate }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...validate} />
    </div>
  );
};
