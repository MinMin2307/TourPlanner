import React from 'react';
import './button.css';

const DeleteTourButton = ({ title, submit, style }) => {
  return (
    <button className="buttonDeleteTour" onClick={submit} style={style}>
      {title}
    </button>
  );
};

export default DeleteTourButton;
