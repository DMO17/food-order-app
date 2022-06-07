import { Modal } from "../Modal";
import classes from "./style.module.css";

export const Cart = () => {
  const cartItems = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c3", name: "Sushi", amount: 2, price: 12.99 },
  ];
  return (
    <Modal>
      {cartItems.map((items) => (
        <ul className={classes["cart-items"]}>
          <li>{items.name}</li>
          <li>{items.price}</li>
          <li>{items.amount}</li>
        </ul>
      ))}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.60</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
