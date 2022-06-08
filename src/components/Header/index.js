import { Fragment } from "react";

import { CartButton } from "../CartButton";
import classes from "./style.module.css";

export const Header = ({ onClickCartHandler }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClickCartHandler={onClickCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};
