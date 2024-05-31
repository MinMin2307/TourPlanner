import React from 'react';
import './button.css'

const UpdateButton = ({title, submit, style}) => {

  return (
    <button className="buttonUpdate" onClick={submit} style={style}>
      {title}
    </button>
  );
};

export default UpdateButton;
