import React from 'react';
import './index.scss';

const Input = ({ value, onTitileChange }) => {
  return (
    <>
      <input
        onChange={onTitileChange}
        className="task__title"
        type="text"
        placeholder="Add Title here"
        value={value}
      />
    </>
  );
};

export default Input;
