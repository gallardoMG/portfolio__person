import React, { useEffect, useRef, useState } from 'react';
import { Nav, Portfolio, Education, Home, Skills, Contact, Footer, Loading, Pointer, BackgroundApp, MenuMovil } from "./components/layout/index";
import { ButtonsCircle } from './components/common/index';
import { ARROW_PHONE } from './constants/variables';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  const mainWrapper = useRef(null);
  const elements = document.querySelectorAll('a, li, .skills__section, skills__section-others, .logo, .home__title, .arrowDesktop, .arrowContact');
  useEffect(() => {
    elements.forEach((el) => {
      el.addEventListener('mouseover', () => {
        document.querySelector('.puntero').classList.add('puntero--grow');
        el.addEventListener('mouseout', () => document.querySelector('.puntero').classList.remove('puntero--grow'))
      })
    })
    return () => elements.forEach((el) => {
      el.removeEventListener('mouseover', () => {
        document.querySelector('.puntero').classList.add('hh');
        el.removeEventListener('mouseout', () => document.querySelector('.puntero').classList.remove('puntero--grow'))
      })
    })
  }, [elements]);
  const currentPosition = (e) => {
    setPosition([e.clientX, e.clientY])
  }
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth > 800)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) setSizeWindow(true)
      else setSizeWindow(false)
    })
    return () => window.removeEventListener('resize', () => {
      if (window.innerWidth > 800) setSizeWindow(true)
      else setSizeWindow(false)
    })
  }
    , [sizeWindow])
  return (
    <div className='mainWrapper' onMouseMove={e => sizeWindow ? currentPosition(e) : e.prevent} ref={mainWrapper}>
      <Loading />
      <Pointer position={position} />
      <BackgroundApp />
      <Nav setShowContact={setShowContact} mainWrapper={mainWrapper} />
      <MenuMovil setShowContact={setShowContact} />
      <Contact showContact={showContact} setShowContact={setShowContact} />
      <Home />
      <Portfolio />
      <Education />
      <Skills />
      <Footer />
      <ButtonsCircle type={ARROW_PHONE} />
    </div>);
}

export default App;
