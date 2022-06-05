import { Fragment } from "react";
import classes from "./style.module.css";

export const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="Table of food"
        />
      </div>
    </Fragment>
  );
};
