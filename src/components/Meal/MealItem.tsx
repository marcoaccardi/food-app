import React from "react";
import { MealItemForm } from "./MealItemForm";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
  // input: {
  //   id: string;
  //   type: string;
  //   min: string;
  //   max: string;
  //   step: string;
  //   defaultValue: string;
  // };
}

export const MealItem: React.FC<MealItemProps> = ({
  name,
  description,
  price,
}) => {
  const priceFloat = `${price.toFixed(2)}`;
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{priceFloat}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};
