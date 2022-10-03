import React from "react";
import { Input } from "../UI/Input";

// interface MealItemFormProps {
//   label: string;
//   id: string;
//   input: {
//     id: string;
//     type: string;
//     min: string;
//     max: string;
//     step: string;
//     defaultValue: string;
//   };
// }

export const MealItemForm: React.FC = ({}) => {
  return (
    <form className='form'>
      <Input
        label={"Amount"}
        input={{
          id: "amount_",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
