import React, { useCallback, useEffect, useRef, useState } from 'react';
import { addClass, removeClass, sizeContainer } from '../../../utils/selectors';
import { PorcentSkill } from '../../common/index';
import { redux, jquery, illustrator, photoshop } from '../../../images/index';

const Skills = () => {
  const [porcent_1, setPorcent_1] = useState(0);
  const [porcent_2, setPorcent_2] = useState(0);
  const [startPorcent_1, setStartPorcent_1] = useState(false);
  const [startPorcent_2, setStartPorcent_2] = useState(false);
  const sizeSection_1 = useRef(null);
  const sizeSection_2 = useRef(null);
  const sizeSection_3 = useRef(null);

  const skills__backgroundSlide1 = useRef(null);
  const skills__backgroundSlide2 = useRef(null);
  const skills__backgroundSlide3 = useRef(null);
  const skills__wrapperIcons = useRef(null);
  const showSection = useCallback(() => {
    if (sizeContainer(sizeSection_1).top <= window.innerHeight) {
      addClass(skills__backgroundSlide1, 'skills__background--effect');
      setStartPorcent_1(true);
    } else {
      removeClass(skills__backgroundSlide1, 'skills__background--effect');
      setStartPorcent_1(false);
      setPorcent_1(0);
    }
    if (sizeContainer(sizeSection_2).top <= window.innerHeight) {
      addClass(skills__backgroundSlide2, 'skills__background--effect');
      setStartPorcent_2(true);
    } else {
      removeClass(skills__backgroundSlide2, 'skills__background--effect');
      setStartPorcent_2(false);
      setPorcent_2(0);
    }
    if (sizeContainer(sizeSection_3).top <= window.innerHeight) {
      addClass(skills__backgroundSlide3, 'skills__background--effect');
      addClass(skills__wrapperIcons, 'skills__wrapperIcons--effect');
    } else {
      removeClass(skills__backgroundSlide3, 'skills__background--effect');
      removeClass(skills__wrapperIcons, 'skills__wrapperIcons--effect');
    }
  }, [setStartPorcent_1, setPorcent_1]);

  useEffect(() => {
    window.addEventListener('scroll', showSection);
    return () => window.removeEventListener('scroll', showSection);
  }, [showSection]);
  useEffect(() => {
    if (startPorcent_1) setPorcent_1(100);
    if (startPorcent_2) setPorcent_2(100);
  }, [setPorcent_1, setPorcent_2, startPorcent_1, startPorcent_2]);

  return (
    <section id='skills' className='skills'>
      <h2 className='skills__title'>Skills and knowledge</h2>
      <div className='skills__section' ref={sizeSection_1}>
        <PorcentSkill
          porcent={porcent_1 * 0.88}
          child={<i className='fab fa-js' />}
        />
        <PorcentSkill
          porcent={porcent_1 * 0.85}
          child={<i className='fab fa-html5' />}
        />
        <h2 className='skills__subtitle'>LANGUAGES</h2>
        <PorcentSkill
          porcent={porcent_1 * 0.84}
          child={<i className='fab fa-css3-alt' />}
        />
        <PorcentSkill
          porcent={porcent_1 * 0.46}
          child={<i className='fab fa-python' />}
        />
        <div
          className='skills__backgroundSlide'
          ref={skills__backgroundSlide1}
        />
      </div>
      <section className='skills__section' ref={sizeSection_2}>
        <PorcentSkill
          porcent={porcent_2 * 0.82}
          child={<i className='fab fa-react' />}
        />
        <PorcentSkill
          porcent={parseInt(porcent_2 * 0.6)}
          child={<img src={redux} alt='redux' className='skills__svg' />}
        />
        <h2 className='skills__subtitle'>LIBRARIES</h2>
        <PorcentSkill
          porcent={parseInt(porcent_2 * 0.46)}
          child={<i className='fab fa-bootstrap' />}
        />
        <PorcentSkill
          porcent={porcent_2 * 0.6}
          child={<img src={jquery} alt='jQuery' className='skills__svg' />}
        />
        <div
          className='skills__backgroundSlide'
          ref={skills__backgroundSlide2}
        />
      </section>
      <section className='skills__section-others' ref={sizeSection_3}>
        <h3 className='skills__subtitle'>VCS</h3>
        <i className='fab fa-github '></i>
        <i className='fab fa-git-alt '></i>
        <div className='skills__plus'>
          PLUS
          <div className='skills__wrapperIcons' ref={skills__wrapperIcons}>
            <img src={illustrator} alt='illustrator' className='skills__svg' />
            <img src={photoshop} alt='photoshop' className='skills__svg' />
            <i className='fab fa-wordpress-simple ' />
          </div>
        </div>
        <div
          className='skills__backgroundSlide'
          ref={skills__backgroundSlide3}
        />
      </section>
    </section>
  );
};

export default Skills;
