import React, { useEffect, useRef } from 'react';
function Home({ home, homeBackground, home__title, backgroundApp__bgLines }) {
  const home__subtitle = useRef(null);
  useEffect(() => {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span id="home__subtitle--random">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
    }
    const phrases = ['front-end', 'development'];
    const el = home__subtitle.current;
    const fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1400);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);
  return (
    <main id='home' className='home home--hidde' ref={home}>
      <div className='homeBackground' ref={homeBackground}>
        <div
          className='backgroundApp__bgLines backgroundApp__bgLines--hidde'
          ref={backgroundApp__bgLines}
        >
          <div className='backgroundApp__bgLines-1' />
          <div className='backgroundApp__bgLines-2' />
          <div className='backgroundApp__bgLines-3' />
          <div className='backgroundApp__bgLines-4' />
          <div className='backgroundApp__bgLines-5' />
          <div className='backgroundApp__bgLines-6' />
        </div>
      </div>
      <h1 className='home__title home__title--font' ref={home__title}>
        EDUARDO GALLARDO
      </h1>
      <div className='home__subtitle' ref={home__subtitle} />
    </main>
  );
}
export default Home;
