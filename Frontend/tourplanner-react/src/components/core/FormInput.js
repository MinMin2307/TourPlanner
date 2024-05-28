import React from "react";
import './formInput.css';

const FormInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="formInput">
      <input 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
