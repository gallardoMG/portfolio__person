import React from 'react';

const Puntero = ({ position }) => {
  return (
    <div
      className='wrapperPuntero'
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className='puntero' />
    </div>
  );
};

export default Puntero;
