import React from 'react';
import './button.css';

const BackButton = ({ title, submit }) => {
  return (
    <button className="buttonBack" onClick={submit}>
      {title}
    </button>
  );
};

export default BackButton;
