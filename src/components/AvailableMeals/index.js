import { useEffect, useState } from "react";
import { StyledWrapper } from "../StyledWrapper";
import { MealItem } from "./MealItem";
import classes from "./style.module.css";

export const AvailableMeals = () => {
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const transformData = (data) => {
    const loadedMeals = [];
    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }

    return loadedMeals;
  };

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-e7a78-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("SORRY SOMETHING WENT WRONG!!!!");
      }

      const data = await response.json();
      const transformedMealData = transformData(data);
      setMealData(transformedMealData);
      setLoading(false);
    };

    const catchFetchMealsError = async () => {
      try {
        await fetchMeals();
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    catchFetchMealsError();
  }, []);

  const LoadedComponent = () => {
    if (!loading && error) {
      return <h1>{error}</h1>;
    }

    if (loading && !error) {
      return <h1>...LOADING!!!</h1>;
    }

    return mealData.map((meal) => <MealItem key={meal.id} {...meal} />);
  };

  return (
    <section className={classes.meals}>
      <StyledWrapper>
        <ul>
          <LoadedComponent />
        </ul>
      </StyledWrapper>
    </section>
  );
};
