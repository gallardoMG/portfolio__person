import React from 'react';
import Logo from './Logo';
const BackgroundApp = () => {
  return (
    <>
      <div className='backgroundApp' />
      <Logo />
      <div className='backgroundApp__bgLines backgroundApp__bgLines--hidde'>
        <div className='backgroundApp__bgLines-1' />
        <div className='backgroundApp__bgLines-2' />
        <div className='backgroundApp__bgLines-3' />
        <div className='backgroundApp__bgLines-4' />
        <div className='backgroundApp__bgLines-5' />
        <div className='backgroundApp__bgLines-6' />
      </div>
    </>
  );
};

export default BackgroundApp;
