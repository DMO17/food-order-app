import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import { CartIcon } from "../CartIcon";

import classes from "./style.module.css";

export const CartButton = ({ onClickCartHandler }) => {
  const [btnAnimated, setBtnAnimated] = useState(false);

  const { items } = useCartContext();

  const cartAmount = items.reduce(
    (currentValue, item) => currentValue + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnAnimated ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnAnimated(true);

    const timer = setTimeout(() => setBtnAnimated(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClickCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};
