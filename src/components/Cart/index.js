import { useCartContext } from "../../context/CartProvider";
import { CartItem } from "../CartItem";
import { Modal } from "../Modal";
import classes from "./style.module.css";

// const cartItems = [
//   { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
//   { id: "c2", name: "MC dS", amount: 2, price: 12.99 },
//   { id: "c3", name: "Salad", amount: 2, price: 12.99 },
// ];

export const Cart = ({ onClickCartHandler }) => {
  const { items, totalAmount } = useCartContext();

  const totalCartAmount = `$${totalAmount.toFixed(2)}`;

  const cartHandlerAdd = () => {};

  const cartHandlerRemove = () => {};
  return (
    <Modal>
      {items.map((item, index) => (
        <CartItem
          {...item}
          key={index}
          cartHandlerAdd={cartHandlerAdd.bind(null, item.id)}
          cartHandlerRemove={cartHandlerRemove.bind(null, item)}
        />
      ))}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalCartAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClickCartHandler}>
          Close
        </button>
        {items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
