import React from 'react';

const Puntero = ({ position }) => {
  return (
    <div
      className='wrapperPuntero'
      style={{ transform: `translate(${position[0]}px, ${position[1]}px)` }}
    >
      <div className='puntero' />
    </div>
  );
};

export default Puntero;
