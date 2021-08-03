import React, { useEffect, useRef } from 'react';
function Home() {
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
            output += `<span id="random">${char}</span>`;
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
        setTimeout(next, 3000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);
  return (
    <main id='home' className='home home--hidde'>
      <div className='homeBackground' />
      <h1 className='home__title'>EDUARDO GALLARDO</h1>
      <div className='home__subtitle' ref={home__subtitle} />
    </main>
  );
}

export default Home;
// import React, { useEffect, useRef } from 'react';
// function Home() {
//   useEffect(() => {
//     class TextScramble {
//       constructor(el) {
//         this.el = el;
//         this.chars = '!<>-_\\/[]{}—=+*^?#';
//         this.update = this.update.bind(this);
//       }
//       setText(newText) {
//         const oldText = this.el.innerText;
//         const length = Math.max(oldText.length, newText.length);
//         const promise = new Promise(resolve => (this.resolve = resolve));
//         this.queue = [];
//         for (let i = 0; i < length; i++) {
//           const from = oldText[i] || '';
//           const to = newText[i] || '';
//           const start = Math.floor(Math.random() * 40);
//           const end = start + Math.floor(Math.random() * 40);
//           this.queue.push({ from, to, start, end });
//         }
//         cancelAnimationFrame(this.frameRequest);
//         this.frame = 0;
//         this.update();
//         return promise;
//       }
//       update() {
//         let output = '';
//         let complete = 0;
//         for (let i = 0, n = this.queue.length; i < n; i++) {
//           let { from, to, start, end, char } = this.queue[i];
//           if (this.frame >= end) {
//             complete++;
//             output += to;
//           } else if (this.frame >= start) {
//             if (!char || Math.random() < 0.28) {
//               char = this.randomChar();
//               this.queue[i].char = char;
//             }
//             output += `<span class="dud">${char}</span>`;
//           } else {
//             output += from;
//           }
//         }
//         this.el.innerHTML = output;
//         if (complete === this.queue.length) {
//           this.resolve();
//         } else {
//           this.frameRequest = requestAnimationFrame(this.update);
//           this.frame++;
//         }
//       }
//       randomChar() {
//         return this.chars[Math.floor(Math.random() * this.chars.length)];
//       }
//     }
//     const phrases = ['front-end', 'development'];
//     const el = home__subtitle.current;
//     const fx = new TextScramble(el);
//     let counter = 0;
//     const next = async () => {
//       fx.setText(phrases[counter]);
//       await (() => {
//         setTimeout(next, 3000);
//       })();
//       counter = (counter + 1) % phrases.length;
//     };
//     next();
//   }, []);
//   const home__subtitle = useRef(null);
//   return (
//     <main id='home' className='home home--hidde'>
//       <div className='homeBackground' />
//       <h1 className='home__title'>EDUARDO GALLARDO</h1>
//       <div className='home__subtitle' ref={home__subtitle} />
//     </main>
//   );
// }

// export default Home;
