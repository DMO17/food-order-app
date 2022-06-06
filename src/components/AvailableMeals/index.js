import { DUMMY_MEALS } from "../../data";
import { StyledWrapper } from "../StyledWrapper";
import { MealItem } from "./MealItem";
import classes from "./style.module.css";

export const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <StyledWrapper>
        <ul>
          {DUMMY_MEALS.map((meal, index) => (
            <MealItem key={index} {...meal} />
          ))}
        </ul>
      </StyledWrapper>
    </section>
  );
};
