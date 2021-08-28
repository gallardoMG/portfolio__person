import React, { useEffect, useRef } from 'react';
import { addClass, removeClass } from '../../../utils/selectors';
import { ButtonsCircle } from '../../common/index';
import { ARROW_CONTACT } from '../../../constants/variables';

const Contact = ({ showContact, setShowContact }) => {
  const close = () => setShowContact(false);
  const contactRef = useRef(null);
  const contact__linkRef = useRef(null);
  useEffect(() => {
    if (showContact) {
      addClass(contactRef, 'contact--open');
      setTimeout(() => addClass(contactRef, 'contact--expand'), 300);
      setTimeout(() => addClass(contact__linkRef, 'contact__link--show'), 500);
    } else {
      removeClass(contactRef, 'contact--expand');
      setTimeout(() => removeClass(contactRef, 'contact--open'), 300);
      removeClass(contact__linkRef, 'contact__link--show');
    }
  }, [showContact]);
  return (
    <section className='contact' ref={contactRef}>
      <div className='contact__quit'>
        <ButtonsCircle type={ARROW_CONTACT} event={close} />
      </div>
      <h2 className='contact__title'>CONTACT</h2>
      <article className='contact__linkWrapper'>
        <div className='contact__link' ref={contact__linkRef}>
          <p className='contact__text'>
            Please, contact me at the following e-amil address
          </p>
          <a className='contact__email' href='mailto:gallartemx@gmail.com'>
            gallartemx@gmail.com
          </a>
          <p className='contact__text'>or</p>
          <div className='contact__icons'>
            <a
              href='https://www.linkedin.com/in/gallardo-front-end/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin contact__iconLink'></i>
            </a>
            <a
              className='contact__iconLink'
              href='https://api.whatsapp.com/send?phone=525621102607&text=Hola!%20Me%20interesa%20trabajar%20contigo!'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-whatsapp-square contact__iconLink' />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default React.memo(Contact);
