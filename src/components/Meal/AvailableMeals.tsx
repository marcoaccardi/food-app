import React from "react";
import { meals } from "../../assets/data";

export const AvailableMeals: React.FC = () => {
  return (
    <section className='meals'>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
};
