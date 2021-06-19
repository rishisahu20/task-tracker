import React from 'react';

import './index.scss';

const Button = ({ addCard }) => {
  return (
    <div className="button__container">
      <div className="button__wrapper" onClick={addCard}>
        Add New Task
      </div>
    </div>
  );
};

export default Button;
