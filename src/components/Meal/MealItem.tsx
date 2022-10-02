import React from "react";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
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
      <div></div>
    </li>
  );
};
