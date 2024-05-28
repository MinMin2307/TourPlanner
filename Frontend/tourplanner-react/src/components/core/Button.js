import React from 'react';

const Button = ({title, color, submit}) => {


  return (
    <>
    <button style={{backgroundColor:color}} onClick={submit}>{title}</button>
    </>
  );
};

export default Button;
