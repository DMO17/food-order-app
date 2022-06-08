import { useRef } from "react";
import { Input } from "../../../Input";
import classes from "./style.module.css";

export const MealItemForm = () => {
  const amountInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    console.log(typeof enteredAmount, enteredAmount);
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
    </form>
  );
};
