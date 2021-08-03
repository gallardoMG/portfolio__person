import React, { useEffect, useRef, useState } from 'react';
import { Nav, Portfolio, Education, Home, Skills, Contact, Footer, Loading, Pointer, BackgroundApp, MenuMovil } from "./components/layout/index";
import { ButtonsCircle } from './components/common/index';
import { ARROW_PHONE } from './constants/variables';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  const mainWrapper = useRef(null);
  const home = useRef(null);
  const homeBackground = useRef(null);
  const backgroundApp__bgLines = useRef(null);
  const currentPosition = (e) => {
    setPosition([e.clientX, e.clientY])
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
      <Loading mainWrapper={mainWrapper} home={home} homeBackground={homeBackground} backgroundApp__bgLines={backgroundApp__bgLines} />
      <Pointer position={position} />
      <BackgroundApp backgroundApp__bgLines={backgroundApp__bgLines} />
      {sizeWindow && <Nav setShowContact={setShowContact} mainWrapper={mainWrapper} />}
      {!sizeWindow && <MenuMovil setShowContact={setShowContact} />}
      <Contact showContact={showContact} setShowContact={setShowContact} />
      <Home home={home} homeBackground={homeBackground} />
      <Portfolio sizeWindow={sizeWindow} />
      <Education />
      <Skills />
      <Footer />
      {!sizeWindow && <ButtonsCircle type={ARROW_PHONE} />}
    </div>);
}

export default App;
