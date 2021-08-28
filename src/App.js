import React, { useEffect, useRef, useState } from 'react';
import { Nav, Portfolio, Education, Home, Skills, Contact, Footer, Pointer, BackgroundApp, MenuMovil } from "./components/layout/index";
import { ButtonsCircle } from './components/common/index';
import { ARROW_PHONE } from './constants/variables';
import { addClass, removeClass } from './utils/selectors';

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
  const [sizeWindow, setSizeWindow] = useState(() => window.innerWidth > 800)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) setSizeWindow(true)
      else setSizeWindow(false)
    });
  }, [sizeWindow])
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
      }, 1950);
    });
  }, []);
  return (
    <div className='mainWrapper mainWrapper--noscroll' onMouseMove={e => sizeWindow ? currentPosition(e) : e.preventDefault()} ref={mainWrapper}>
      {sizeWindow && <Pointer position={position} />}
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
