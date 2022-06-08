import { Modal } from "../Modal";
import classes from "./style.module.css";

const cartItems = [
  { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c2", name: "Sushi", amount: 2, price: 12.99 },
  { id: "c3", name: "Sushi", amount: 2, price: 12.99 },
];

export const Cart = ({ onClickCartHandler }) => {
  return (
    <Modal>
      {cartItems.map((items, index) => (
        <ul className={classes["cart-items"]} key={index}>
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
        <button className={classes["button--alt"]} onClick={onClickCartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
