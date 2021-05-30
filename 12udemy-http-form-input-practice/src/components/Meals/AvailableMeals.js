import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals =  async () => {
            const response = await fetch('https://react-http-aa0e5-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
            const responseData = await response.json();

            const loadMeals = [];

            for (const key in responseData) {
                loadMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadMeals);
        };
        fetchMeals().catch( error => {
            setHttpError(error.message);
        });
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <section className={classes.mealLoading}>
                Loading...
            </section>
        )
    }
    if (httpError) {
        return (
            <section className={classes.mealsError}>
                Error Loading Meals
            </section>
        )
    }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
