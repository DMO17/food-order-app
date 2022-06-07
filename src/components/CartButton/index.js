import { CartIcon } from "../CartIcon";

import classes from "./style.module.css";

export const CartButton = ({ onClickCartHandler }) => {
  return (
    <button className={classes.button} onClick={onClickCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
