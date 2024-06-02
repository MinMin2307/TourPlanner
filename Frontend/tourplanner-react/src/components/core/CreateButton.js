import React from 'react';
import './button.css'

const CreateButton = ({ title, submit }) => {

  return (
    <button className="buttonCreate" onClick={submit}>
      {title}
    </button>
  );
};

export default CreateButton;
