import { Fragment, useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import { CartItem } from "../CartItem";
import { Checkout } from "../Checkout";
import { Modal } from "../Modal";
import classes from "./style.module.css";

export const Cart = ({ onClickCartHandler }) => {
  const { items, totalAmount, addItem, removeItem } = useCartContext();
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const handleShowCheckout = () => setShowCheckout((prevState) => !prevState);

  const totalCartAmount = `$${totalAmount.toFixed(2)}`;

  const cartHandlerAdd = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartHandlerRemove = (id) => {
    removeItem(id);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-order-app-e7a78-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const CardModalContent = () => {
    return (
      <Fragment>
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

        {showCheckout && (
          <Checkout
            handleShowCheckout={handleShowCheckout}
            submitOrderHandler={submitOrderHandler}
          />
        )}
      </Fragment>
    );
  };

  const OrderSubmitting = () => {
    return <h1>SENDING ORDER DATA ....</h1>;
  };

  const OrderSubmitted = () => {
    return (
      <Fragment>
        <h1>Successfully Sent the Order!!!</h1>
        <div className={classes.actions}>
          <button
            onClick={() => window.location.reload()}
            className={classes.button}
          >
            Return to Shopping
          </button>
        </div>
      </Fragment>
    );
  };

  return (
    <Modal>
      {!isSubmitting && !didSubmit && <CardModalContent />}
      {isSubmitting && !didSubmit && <OrderSubmitting />}
      {didSubmit && !isSubmitting && <OrderSubmitted />}
    </Modal>
  );
};
