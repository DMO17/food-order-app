import { Input } from "../../../Input";
import classes from "./style.module.css";

export const MealItemForm = () => {
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
    <form className={classes.form}>
      <Input {...input} />
      <button>+Add</button>
    </form>
  );
};
