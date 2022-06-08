import classes from "./style.module.css";

export const CartItem = ({
  name,
  price,
  amount,
  cartHandlerAdd,
  cartHandlerRemove,
}) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price.toFixed(2)}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={cartHandlerRemove}>-</button>
        <button onClick={cartHandlerAdd}>+</button>
      </div>
    </li>
  );
};
