import React from 'react';
import { Link as LinkS } from 'react-scroll';
import { NAV_PHONE, NAV_DESKTOP } from '../../../constants/variables';

const NavList = ({ type, setShowContact, eventLink }) => {
  let className;
  let click;
  let classActive;
  switch (type) {
    case NAV_PHONE:
      className = 'navPhone';
      classActive = '';
      click = eventLink;
      break;
    case NAV_DESKTOP:
      className = 'navDesktop';
      classActive = 'navDesktop--active';
      click = e => e.preventDefault();
      break;
    default:
      return;
  }
  return (
    <>
      <li className={className}>
        <LinkS
          to='portfolio'
          smooth={true}
          duration={1000}
          spy={true}
          activeClass={classActive}
          onClick={click}
        >
          Portfolio
        </LinkS>
      </li>
      <li className={className}>
        <LinkS
          to='education'
          smooth={true}
          duration={1000}
          spy={true}
          activeClass={classActive}
          onClick={click}
        >
          Education
        </LinkS>
      </li>
      <li className={className}>
        <LinkS
          to='skills'
          smooth={true}
          duration={1000}
          spy={true}
          activeClass={classActive}
          onClick={click}
        >
          Skills
        </LinkS>
      </li>
      <li
        className={className}
        onClick={
          click === eventLink
            ? () => {
                setShowContact(true);
                eventLink();
              }
            : () => setShowContact(true)
        }
      >
        contact
      </li>
    </>
  );
};

export default NavList;
