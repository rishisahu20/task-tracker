import React from 'react';
import './index.scss';

const Input = ({ value, handleDescpChange }) => {
  return (
    <>
      <textarea
        className="task__detail"
        placeholder="Enter Task Detail"
        onChange={handleDescpChange}
        name="message"
        rows="3"
        value={value}
      ></textarea>
    </>
  );
};

export default Input;
