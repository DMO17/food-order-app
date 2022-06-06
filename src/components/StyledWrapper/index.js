import classes from "./style.module.css";

export const StyledWrapper = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
