import React from "react";

interface InputProps {
  label: string;
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
}

export const Input: React.FC<InputProps> = ({ label, input }) => {
  return (
    <div className='input'>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};
