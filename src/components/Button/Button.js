import React from 'react';
import './Button.scss';

const Button = ({ text }) => {
  return (
    <button type="button" className="button">
      {text}
    </button>
  );
};

export default Button;
