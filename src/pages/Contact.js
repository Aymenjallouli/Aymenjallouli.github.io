import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';
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
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h1 className="section-title">{t('contact.title')}</h1>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('contact.infoTitle')}</h2>
            <p className="contact-intro">{t('contact.intro')}</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-text">
                  <h3>{t('contact.emailLabel')}</h3>
                  <p><a href="mailto:aymen.jallouli@esprit.tn">aymen.jallouli@esprit.tn</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-text">
                  <h3>{t('contact.phoneLabel')}</h3>
                  <p><a href="tel:+21629082917">+216 29 082 917</a></p>
                </div>
              </div>

              <div className="contact-item">
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
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.name')}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.namePh')} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.emailPh')} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.subject')}</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder={t('contact.subjectPh')} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t('contact.messagePh')} rows="5" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                {t('contact.send')}
              </button>

              {formStatus.submitted && (
                <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
