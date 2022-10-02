import React from "react";
import { MealsSummary } from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals";
export const Meals: React.FC = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
