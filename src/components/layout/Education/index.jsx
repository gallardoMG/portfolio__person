import React, { useCallback, useEffect, useRef, useState } from 'react';
import { a } from 'react-spring';
import { certificate1, certificate2, certificate3, certificate4 } from './data';
import { ConfigSpring } from '../../../utils/useSpring';
import { sizeContainer } from '../../../utils/selectors';

const Education = () => {
  const [axisX, setAxisX] = useState(0);
  const education = useRef(null);
  const slideText = useCallback(() => {
    if (
      sizeContainer(education).top <= window.innerHeight &&
      sizeContainer(education).bottom >= 0
    ) {
      setAxisX(
        (100 / sizeContainer(education).height) *
          sizeContainer(education).top *
          (sizeContainer(education).right / (window.innerWidth / 5))
      );
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', slideText);
    return () => window.removeEventListener('scroll', slideText);
  }, [slideText]);
  return (
    <section id='education' className='education' ref={education}>
      <h2 className='education__title'>EDUCATION</h2>
      <a
        className='education__section'
        href='https://freecodecamp.org/espanol/certification/eduardo_gallardo/front-end-libraries'
        target='_blank'
        rel='noreferrer'
      >
        <a.p style={ConfigSpring(`translate(${axisX}px,0)`)}>
          {certificate1.map(el => el + '       ')}
        </a.p>
      </a>

      <a
        className='education__section'
        href='https://freecodecamp.org/espanol/certification/eduardo_gallardo/javascript-algorithms-and-data-structures'
        target='_blank'
        rel='noreferrer'
      >
        <a.p style={ConfigSpring(`translate(${-axisX}px,0)`)}>
          {certificate2.map(el => el + '       ')}
        </a.p>
      </a>

      <a
        className='education__section'
        href='https://freecodecamp.org/certification/eduardo_gallardo/responsive-web-design'
        target='_blank'
        rel='noreferrer'
      >
        <a.p style={ConfigSpring(`translate(${axisX}px,0)`)}>
          {certificate3.map(el => el + '       ')}
        </a.p>
      </a>

      <a
        className='education__section'
        href='https://fi.uy/fxms'
        target='_blank'
        rel='noreferrer'
      >
        <a.p style={ConfigSpring(`translate(${-axisX}px,0)`)}>
          {certificate4.map(el => el + '       ')}
        </a.p>
      </a>
      {console.log('repinted')}
    </section>
  );
};

export default React.memo(Education);
