import React from "react";
import { meals } from "../../assets/data";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem";

export const AvailableMeals: React.FC = ({}) => {
  return (
    <section className='meals'>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};
