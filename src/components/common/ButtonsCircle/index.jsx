import React, { useCallback, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { addClass, removeClass } from '../../../utils/selectors';
import {
  ARROW_DESKTOP,
  ARROW_PHONE,
  ARROW_CONTACT,
  ARROW_MENU,
} from '../../../constants/variables';

const ButtonsCircle = ({ type, event }) => {
  const topTop = () => scroll.scrollToTop();
  const svg = useRef(null);
  const showArrow = useCallback(() => {
    if (window.pageYOffset < 300) {
      addClass(svg, 'arrowDesktop--hidde');
      addClass(svg, 'arrowPhone--hidde');
    } else {
      removeClass(svg, 'arrowDesktop--hidde');
      removeClass(svg, 'arrowPhone--hidde');
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', showArrow);
    return () => window.removeEventListener('scroll', showArrow);
  }, [showArrow]);
  let className;
  let className_svg1;
  let className_svg2;
  let className_svg3;
  let onClick;
  switch (type) {
    case ARROW_DESKTOP:
      className = 'arrowDesktop arrowDesktop--hidde';
      className_svg1 = 'arrowDesktop__svg1';
      className_svg2 = 'arrowDesktop__svg2';
      className_svg3 = 'arrowDesktop__svg3';
      onClick = topTop;
      break;
    case ARROW_PHONE:
      className = 'arrowPhone arrowPhone--hidde';
      className_svg1 = 'arrowPhone__svg1';
      className_svg2 = 'arrowPhone__svg2';
      className_svg3 = 'arrowPhone__svg3';
      onClick = topTop;
      break;
    case ARROW_CONTACT:
      className = 'arrowContact';
      className_svg1 = 'arrowContact__svg1';
      className_svg2 = 'arrowContact__svg2';
      className_svg3 = 'arrowContact__svg3';
      onClick = event;
      break;
    case ARROW_MENU:
      className = 'arrowMenu';
      className_svg1 = 'arrowMenu__svg1';
      className_svg2 = 'arrowMenu__svg2';
      className_svg3 = 'arrowMenu__svg3';
      onClick = e => e.preventDefault();
      break;
    default:
      return;
  }
  return (
    <svg
      className={`${className}`}
      onClick={onClick}
      ref={svg}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox='0 0 65 65'
      style={{ enableBackground: 'new 0 0 65 65' }}
      xmlSpace='preserve'
    >
      <g id='Capa_2'>
        <g>
          <g>
            <path
              className={className_svg1}
              d='M32.3,0.04c-17.95,0-32.5,14.55-32.5,32.5s14.55,32.5,32.5,32.5s32.5-14.55,32.5-32.5S50.25,0.04,32.3,0.04z
 M32.31,60.04c-15.44,0-27.95-12.31-27.95-27.5s12.51-27.5,27.95-27.5c15.44,0,27.95,12.31,27.95,27.5S47.75,60.04,32.31,60.04z'
            />
          </g>
          <g>
            <ellipse
              className={className_svg2}
              cx='32.31'
              cy='32.54'
              rx='27.95'
              ry='27.5'
            />
          </g>
        </g>
        <polygon
          className={className_svg3}
          points='19.32,32.04 32.32,19.04 45.27,31.99 43.27,32.04 32.31,21.08 21.39,32 	'
        />
      </g>
    </svg>
  );
};

export default ButtonsCircle;
