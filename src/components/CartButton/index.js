import { useCartContext } from "../../context/CartProvider";
import { CartIcon } from "../CartIcon";

import classes from "./style.module.css";

export const CartButton = ({ onClickCartHandler }) => {
  const { items } = useCartContext();

  const cartAmount = items.reduce(
    (currentValue, item) => currentValue + item.amount,
    0
  );

  return (
    <button className={classes.button} onClick={onClickCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};
