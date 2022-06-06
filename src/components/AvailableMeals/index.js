import { DUMMY_MEALS } from "../../data";
import { StyledWrapper } from "../StyledWrapper";
import classes from "./style.module.css";

export const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <StyledWrapper>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <li>{meal.name}</li>
          ))}
        </ul>
      </StyledWrapper>
    </section>
  );
};
