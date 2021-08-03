import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    window.addEventListener('load', () => {
      document.querySelector('.home').classList.remove('home--hidde');
      setTimeout(() => {
        document
          .querySelector('.homeBackground')
          .classList.add('homeBackground--expand');
        document
          .querySelector('.backgroundApp__bgLines')
          .classList.remove('backgroundApp__bgLines--hidde');
      }, 1000);
      setTimeout(() => {
        document
          .querySelector('.mainWrapper')
          .classList.remove('mainWrapper--noscroll');
        // document.querySelector('.nav').classList.remove('nav--hidde');
        // document.querySelector('.footer').classList.remove('footer--hidde');
        // document
        //   .querySelector('.menuMovil')
        //   .classList.remove('menuMovil--hidde');
        document
          .querySelector('.backgroundApp__bgLines')
          .classList.add('backgroundApp__bgLines--effect');
      }, 2000);
    });
  }, []);
  return <div className='loading' />;
};

export default Loading;
