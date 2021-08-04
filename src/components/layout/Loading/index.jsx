import React, { useEffect } from 'react';
import { addClass, removeClass } from '../../../utils/selectors';
const Loading = ({
  mainWrapper,
  home,
  homeBackground,
  backgroundApp__bgLines,
  home__title,
}) => {
  useEffect(() => {
    window.addEventListener('load', () => {
      removeClass(home, 'home--hidde');
      setTimeout(() => {
        addClass(homeBackground, 'homeBackground--expand');
        removeClass(backgroundApp__bgLines, 'backgroundApp__bgLines--hidde');
      }, 950);
      setTimeout(() => {
        removeClass(home__title, 'home__title--font');
        removeClass(mainWrapper, 'mainWrapper--noscroll');
        addClass(backgroundApp__bgLines, 'backgroundApp__bgLines--effect');
      }, 1950);
    });
  }, []);
  return <></>;
};

export default Loading;
