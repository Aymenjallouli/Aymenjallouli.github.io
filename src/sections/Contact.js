import React, { useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { MailIcon, PhoneIcon, PinIcon } from '../components/icons';

const EMAIL = 'aymen.jallouli@esprit.tn';
const PHONE = '+216 29 082 917';

const Contact = () => {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subRef = useRef(null);
  const msgRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const val = (r) => (r.current ? r.current.value : '');
    const subject = encodeURIComponent(val(subRef));
    const body = encodeURIComponent(`${val(msgRef)}\n\n— ${val(nameRef)} (${val(emailRef)})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="tag" style={{ transform: 'rotate(-1.5deg)' }}>
          {t('contact.issue')}
        </div>
        <h2 className="h-section">{t('contact.title')}</h2>

        <div className="two-col">
          <div>
            <h3 className="contact__h3">{t('contact.infoTitle')}</h3>
            <p className="contact__intro">{t('contact.intro')}</p>

            <div className="contact__list">
              <a className="crow" href={`mailto:${EMAIL}`}>
                <span className="crow__icon crow__icon--red">
                  <MailIcon />
                </span>
                <span>
                  <span className="crow__k">{t('contact.emailLabel')}</span>
                  <span className="crow__v">{EMAIL}</span>
                </span>
              </a>

              <a className="crow" href="tel:+21629082917">
                <span className="crow__icon crow__icon--yellow">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="crow__k">{t('contact.phoneLabel')}</span>
                  <span className="crow__v">{PHONE}</span>
                </span>
              </a>

              <div className="crow">
                <span className="crow__icon crow__icon--ink">
                  <PinIcon />
                </span>
                <span>
                  <span className="crow__k">{t('contact.locationLabel')}</span>
                  <span className="crow__v">{t('contact.location')}</span>
                </span>
              </div>
            </div>

            <div className="contact__follow">
              <span>{t('contact.follow')}</span>
              <div>
                <a className="pill" href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer">
                  GITHUB
                </a>
                <a
                  className="pill"
                  href="https://www.linkedin.com/in/aymen-jallouli-713534254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>

          <form className="panel form" onSubmit={submit}>
            <span className="panel__dots" aria-hidden="true" />

            <div className="form__row">
              <label>
                <span className="form__k">{t('contact.name')}</span>
                <input ref={nameRef} type="text" name="name" autoComplete="name" required placeholder={t('contact.namePh')} />
              </label>
              <label>
                <span className="form__k">{t('contact.emailLabel')}</span>
                <input ref={emailRef} type="email" name="email" autoComplete="email" required placeholder={t('contact.emailPh')} />
              </label>
            </div>

            <label>
              <span className="form__k">{t('contact.subject')}</span>
              <input ref={subRef} type="text" name="subject" required placeholder={t('contact.subjectPh')} />
            </label>

            <label>
              <span className="form__k">{t('contact.message')}</span>
              <textarea ref={msgRef} name="message" rows={5} required placeholder={t('contact.messagePh')} />
            </label>

            <button type="submit" className="btn btn--red form__send">
              {t('contact.send')}
            </button>

            {sent && (
              <div className="form__ok" role="status">
                {t('contact.success')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
