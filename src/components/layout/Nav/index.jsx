import React, { useCallback, useEffect, useState } from 'react';
import { NAV_DESKTOP } from '../../../constants/variables';
import { NavList, ButtonsCircle } from '../../common/index';
import { sizeContainer } from '../../../utils/selectors';

const Nav = ({ setShowContact, mainWrapper }) => {
  const [progressBar, setProgressBar] = useState(0);
  const bar = useCallback(() => {
    const porcent =
      (100 / (sizeContainer(mainWrapper).height - window.innerHeight)) *
      window.pageYOffset;
    setProgressBar(porcent);
  }, [setProgressBar, mainWrapper]);
  useEffect(() => {
    window.addEventListener('scroll', bar);
    return () => window.removeEventListener('scroll', bar);
  }, [bar]);

  return (
    <nav className='nav'>
      {/* <nav className='nav nav--hidde'> */}
      <ul className='nav__list-wrapper'>
        <li className='nav__arrow'>
          <ButtonsCircle type={'ARROW_DESKTOP'} />
        </li>
        <NavList type={NAV_DESKTOP} setShowContact={setShowContact} />
      </ul>
      <div className='nav__bar'>
        <div
          className='nav__progress'
          style={{ height: `${progressBar}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
