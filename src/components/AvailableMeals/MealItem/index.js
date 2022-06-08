import { useCartContext } from "../../../context/CartProvider";
import { MealItemForm } from "./MealItemForm";
import classes from "./style.module.css";

export const MealItem = ({ name, description, price, id }) => {
  const { addItem, items } = useCartContext();

  const addToCartHandler = (amount) => {
    addItem({
      id,
      name,
      amount,
      price,
    });

    console.log(items);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm addToCartHandler={addToCartHandler} />
      </div>
    </li>
  );
};
