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
  const { items, totalAmount, addItem, removeItem } = useCartContext();

  const totalCartAmount = `$${totalAmount.toFixed(2)}`;

  const cartHandlerAdd = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartHandlerRemove = (id) => {
    removeItem(id);
  };

  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {items.map((item) => (
          <CartItem
            {...item}
            key={item.id}
            cartHandlerAdd={cartHandlerAdd.bind(null, item)}
            cartHandlerRemove={cartHandlerRemove.bind(null, item.id)}
          />
        ))}
      </ul>
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
