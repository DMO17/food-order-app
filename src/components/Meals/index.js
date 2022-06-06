import { Fragment } from "react";
import { AvailableMeals } from "../AvailableMeals";
import { MealSummary } from "../MealSummary";

export const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};
