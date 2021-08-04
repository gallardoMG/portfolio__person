import React, { useEffect } from 'react';
import { addClass, removeClass } from '../../../utils/selectors';
const Loading = ({
  mainWrapper,
  home,
  homeBackground,
  backgroundApp__bgLines,
}) => {
  useEffect(() => {
    window.addEventListener('load', () => {
      removeClass(home, 'home--hidde');
      setTimeout(() => {
        addClass(homeBackground, 'homeBackground--expand');
        removeClass(backgroundApp__bgLines, 'backgroundApp__bgLines--hidde');
      }, 950);
      setTimeout(() => {
        removeClass(mainWrapper, 'mainWrapper--noscroll');
        addClass(backgroundApp__bgLines, 'backgroundApp__bgLines--effect');
      }, 2000);
    });
  }, [home, homeBackground, backgroundApp__bgLines, mainWrapper]);
  return <></>;
};

export default Loading;
