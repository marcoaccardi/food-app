import React from "react";
import mealsImage from "../../assets/meals.jpeg";
import { HeaderCartButton } from "./HeaderCartButton";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className='header'>
        <h1>Food App</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='image_meal' />
      </div>
    </>
  );
};
