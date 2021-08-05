import React, { useEffect, useRef, useState } from 'react';
import { Nav, Portfolio, Education, Home, Skills, Contact, Footer, Loading, Pointer, BackgroundApp, MenuMovil } from "./components/layout/index";
import { ButtonsCircle } from './components/common/index';
import { ARROW_PHONE } from './constants/variables';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mainWrapper = useRef(null);
  const home = useRef(null);
  const homeBackground = useRef(null);
  const backgroundApp__bgLines = useRef(null);
  const home__title = useRef(null);
  const currentPosition = (e) => {
    setPosition({ ...position, x: e.clientX, y: e.clientY })
  }
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth > 800)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) setSizeWindow(true)
      else setSizeWindow(false)
    });
  }, [sizeWindow])
  return (
    <div className='mainWrapper mainWrapper--noscroll' onMouseMove={e => sizeWindow ? currentPosition(e) : e.prevent} ref={mainWrapper}>
      <Loading mainWrapper={mainWrapper} home={home} homeBackground={homeBackground} backgroundApp__bgLines={backgroundApp__bgLines} home__title={home__title} />
      <Pointer position={position} />
      <BackgroundApp />
      {sizeWindow && <Nav setShowContact={setShowContact} mainWrapper={mainWrapper} />}
      {!sizeWindow && <MenuMovil setShowContact={setShowContact} />}
      <Contact showContact={showContact} setShowContact={setShowContact} />
      <Home home={home} homeBackground={homeBackground} home__title={home__title} backgroundApp__bgLines={backgroundApp__bgLines} />
      <Portfolio sizeWindow={sizeWindow} />
      <Education />
      <Skills />
      <Footer />
      {!sizeWindow && <ButtonsCircle type={ARROW_PHONE} />}
    </div>);
}

export default App;
