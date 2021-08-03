import React, { useCallback, useEffect, useRef, useState } from 'react';
import { a } from 'react-spring';
import { ConfigSpring } from '../../../utils/useSpring';
import { sizeContainer, addClass, removeClass } from '../../../utils/selectors';
import {
  time,
  calculator,
  drumMachine,
  markDown,
  randomQuote,
} from '../../../images/index';

const Portfolio = ({ sizeWindow }) => {
  const [tiltText, setTiltText] = useState(0);
  const [client, setClient] = useState([0, 0]);
  const [img, setImg] = useState(null);
  const beforeScroll = useRef(0);
  const idTimeoutScroll = useRef(null);
  const containerLinks = useRef(null);
  const portfolio__linkImg = useRef(null);

  const portfolioEffect = useCallback(() => {
    clearTimeout(idTimeoutScroll.current);
    const lastScroll = window.pageYOffset;
    if (
      sizeContainer(containerLinks).top >= -window.innerHeight &&
      sizeContainer(containerLinks).bottom <=
        sizeContainer(containerLinks).height + window.innerHeight
    ) {
      if (lastScroll > beforeScroll.current) {
        setTiltText(-0.08);
      } else if (lastScroll < beforeScroll.current) {
        setTiltText(0.08);
      }
      beforeScroll.current = lastScroll;
      idTimeoutScroll.current = setTimeout(() => setTiltText(0), 100);
    }
  }, [tiltText]);
  const moveImg = useCallback(e => {
    setClient([
      e.clientX - sizeContainer(containerLinks).left - 400,
      e.clientY - sizeContainer(containerLinks).top - 30,
    ]);
    removeClass(portfolio__linkImg, 'portfolio__img--hidden');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', portfolioEffect);
  }, [portfolioEffect]);
  return (
    <section id='portfolio' className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>
      <a.img
        src={img}
        className='portfolio__img portfolio__img--hidden'
        ref={portfolio__linkImg}
        alt=''
        style={ConfigSpring(`translate(${client[0]}px,${client[1]}px)`)}
      />
      <a.div
        ref={containerLinks}
        onMouseMove={e => (sizeWindow ? moveImg(e) : e.preventDefault)}
        onMouseOut={e =>
          sizeWindow
            ? addClass(portfolio__linkImg, 'portfolio__img--hidden')
            : e.preventDefault
        }
        style={ConfigSpring(`matrix(1, ${tiltText}, 0, 1, 0, 0)`)}
      >
        <a
          className='portfolio__link'
          href='https://timer-manager.herokuapp.com/'
          target='_blank'
          rel='noreferrer noopener'
          onMouseOver={() => setImg(time)}
        >
          TIME MANAGAER
        </a>
        <a
          className='portfolio__link'
          href='https://codepen.io/eduardo-m-gallardo/full/dyvrGaJ'
          target='_blank'
          rel='noreferrer noopener'
          onMouseOver={() => setImg(calculator)}
        >
          CALCULATOR
        </a>
        <a
          className='portfolio__link'
          href='https://timer-manager.herokuapp.com/'
          target='_blank'
          rel='noreferrer noopener'
          onMouseOver={() => setImg(drumMachine)}
        >
          DRUM MACHINE
        </a>
        <a
          className='portfolio__link'
          href='https://timer-manager.herokuapp.com/'
          target='_blank'
          rel='noreferrer noopener'
          onMouseOver={() => setImg(markDown)}
        >
          MARK DOWN
        </a>
        <a
          className='portfolio__link'
          href='https://timer-manager.herokuapp.com/'
          target='_blank'
          rel='noreferrer noopener'
          onMouseOver={() => setImg(randomQuote)}
        >
          RANDOM QUOTE
        </a>
      </a.div>
    </section>
  );
};

export default Portfolio;
