import React from "react";
import { CartIcon } from "../Cart/CartIcon";

interface HeaderCartButtonProps {}

export const HeaderCartButton: React.FC<HeaderCartButtonProps> = ({}) => {
  return (
    <button className='button'>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>3</span>
    </button>
  );
};
