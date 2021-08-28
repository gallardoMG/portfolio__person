import React from 'react';
import Logo from './Logo';
const BackgroundApp = () => {
  return (
    <>
      <div className='backgroundApp' />
      <Logo />
    </>
  );
};

export default React.memo(BackgroundApp);
