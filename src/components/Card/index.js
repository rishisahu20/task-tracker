import React from 'react';

import close from '../../assets/icons/close.png';
import './index.scss';

const Card = ({ children, onDragStart, draggable, deleteTask, cardKey }) => {
  return (
    <>
      <div
        key={cardKey}
        className="card__container"
        draggable={draggable}
        onDragStart={onDragStart}
      >
        <img
          src={close}
          onClick={deleteTask}
          className="close__icon"
          alt="close"
        />
        {children}
      </div>
    </>
  );
};

export default Card;
