'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { SpiderMark, WebCorner } from '@/components/icons';
const spiderSvg = '/assets/spidey/spider.svg';

const LINKS = [
  { id: 'home', key: 'home' },
  { id: 'origin', key: 'about' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' },
];

/** `base` prefixes the in-page anchors so the footer also works off-homepage. */
const SiteFooter = ({ base = '' }) => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <WebCorner className="footer__web" />
      <div className="footer__thread thread" aria-hidden="true">
        <div className="thread__line" />
        <img src={spiderSvg} alt="" />
      </div>

      <div className="footer__grid">
        <div className="footer__brand">
          <div>
            <span className="footer__mark">
              <SpiderMark size={20} />
            </span>
            <span className="footer__name">AYMEN JALLOULI</span>
          </div>
          <p className="footer__tag">{t('footer.tagline')}</p>
        </div>

        <div className="footer__links">
          {LINKS.map((l) => (
            <a key={l.id} href={`${base}#${l.id}`}>
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </div>

        <div className="footer__socials">
          <a className="pill" href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a className="pill" href="https://www.linkedin.com/in/aymen-jallouli-713534254/" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a className="pill" href="mailto:aymen.jallouli@esprit.tn">
            EMAIL
          </a>
        </div>
      </div>

      <div className="footer__copy">© {new Date().getFullYear()} Aymen Jallouli — {t('footer.rights')}</div>
    </footer>
  );
};

export default SiteFooter;
