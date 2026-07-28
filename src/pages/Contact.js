import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import '../styles/Contact.css';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`De: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:aymen.jallouli@esprit.tn?subject=${subject}&body=${body}`;

    setFormStatus({ submitted: true, success: true, message: t('contact.success') });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, success: false, message: '' }), 5000);
  };

  return (
    <section className="contact-section section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h1 className="section-title">{t('contact.title')}</h1>
        </Reveal>

        <div className="contact-container">
          <Reveal className="contact-info" x={-24} y={0}>
            <h2>{t('contact.infoTitle')}</h2>
            <p className="contact-intro">{t('contact.intro')}</p>

            <div className="contact-details">
              <a className="contact-item glass" href="mailto:aymen.jallouli@esprit.tn">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-text">
                  <h3>{t('contact.emailLabel')}</h3>
                  <p>aymen.jallouli@esprit.tn</p>
                </div>
              </a>

              <a className="contact-item glass" href="tel:+21629082917">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-text">
                  <h3>{t('contact.phoneLabel')}</h3>
                  <p>+216 29 082 917</p>
                </div>
              </a>

              <div className="contact-item glass">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-text">
                  <h3>{t('contact.locationLabel')}</h3>
                  <p>{t('contact.location')}</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h3>{t('contact.follow')}</h3>
              <div className="social-links">
                <a href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/aymen-jallouli-713534254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-container glass" x={24} y={0} delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} placeholder={t('contact.namePh')} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.emailLabel')}</label>
                  <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder={t('contact.emailPh')} required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.subject')}</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder={t('contact.subjectPh')} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t('contact.messagePh')} rows="6" required></textarea>
              </div>

              <Magnetic>
                <button type="submit" className="btn btn-primary submit-btn">
                  {t('contact.send')} <FaPaperPlane className="btn-icon" />
                </button>
              </Magnetic>

              <AnimatePresence>
                {formStatus.submitted && (
                  <motion.div
                    className={`form-status ${formStatus.success ? 'success' : 'error'}`}
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <FaCheckCircle /> {formStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
