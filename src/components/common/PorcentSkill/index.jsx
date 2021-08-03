import React from 'react';

const PorcentSkill = ({ porcent, child }) => {
  return (
    <section className='chartSkills'>
      <div className='chartSkills__wrapperBar'>
        <div
          className='chartSkills__bar'
          style={{ transform: `rotate(.${parseInt(50 % 100) * porcent}turn)` }}
        />
      </div>
      <div className='chartSkills__portcent'>
        {child}
        {`${porcent}%`}
      </div>
    </section>
  );
};

export default PorcentSkill;
