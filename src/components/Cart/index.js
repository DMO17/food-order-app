import { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import { CartItem } from "../CartItem";
import { Checkout } from "../Checkout";
import { Modal } from "../Modal";
import classes from "./style.module.css";

export const Cart = ({ onClickCartHandler }) => {
  const { items, totalAmount, addItem, removeItem } = useCartContext();

  const [showCheckout, setShowCheckout] = useState(false);

  const handleShowCheckout = () => setShowCheckout((prevState) => !prevState);

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
        {!showCheckout && (
          <button
            className={classes["button--alt"]}
            onClick={onClickCartHandler}
          >
            Close
          </button>
        )}
        {items.length > 0 && !showCheckout && (
          <button onClick={handleShowCheckout} className={classes.button}>
            Order
          </button>
        )}
      </div>

      {showCheckout && <Checkout handleShowCheckout={handleShowCheckout} />}
    </Modal>
  );
};
