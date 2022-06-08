import { useRef, useState } from "react";
import { Input } from "../../../Input";
import classes from "./style.module.css";

export const MealItemForm = ({ addToCartHandler }) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount === 0 || enteredAmount < 0 || enteredAmount > 5) {
      setAmountIsValid(false);

      return;
    }

    addToCartHandler(enteredAmount);
  };

  const input = {
    id: "amount",
    type: "number",
    label: "Amount",
    validate: {
      min: 0,
      max: 5,
      step: 1,
      default: "1",
    },
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input {...input} ref={amountInputRef} />
      <button type="submit">+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};
