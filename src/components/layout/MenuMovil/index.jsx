import React, { useRef, useState } from 'react';
import { ARROW_MENU } from '../../../constants/variables';
import { ButtonsCircle, NavList } from '../../common/index';
import { toggleClass } from '../../../utils/selectors';

const MenuMovil = ({ setShowContact }) => {
  const [close, setClose] = useState(true);
  const menuMovil = useRef(null);
  const menuMovil__icon = useRef(null);
  const munuMovil__liks = useRef(null);
  const eventLink = () => {
    toggleClass(menuMovil, 'menuMovil--expand');
    toggleClass(menuMovil__icon, 'menuMovil__icon--effect');
    toggleClass(munuMovil__liks, 'munuMovil__liks--show');
    setClose(prevState => !prevState);
  };
  return (
    <section className='menuMovil' ref={menuMovil}>
      <div
        className='menuMovil__icon'
        ref={menuMovil__icon}
        onClick={eventLink}
      >
        {close ? 'MENU' : <ButtonsCircle type={ARROW_MENU} />}
      </div>
      <ul className='munuMovil__liks' ref={munuMovil__liks}>
        <NavList
          type={'NAV_PHONE'}
          eventLink={eventLink}
          setShowContact={setShowContact}
        />
      </ul>
    </section>
  );
};

export default MenuMovil;
