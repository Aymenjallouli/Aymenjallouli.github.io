'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { SpiderMark, WebCorner } from '@/components/icons';
import TT, { Dual } from '@/components/ThemeText';
const spiderSvg = '/assets/spidey/spider.svg';

const LINKS = [
  { id: 'home', key: 'home' },
  { id: 'origin', key: 'about' },
  { id: 'projects', key: 'projects' },
  { id: 'services', key: 'services' },
  { id: 'contact', key: 'contact' },
];

/** `base` prefixes the in-page anchors so the footer also works off-homepage. */
const SiteFooter = ({ base = '' }) => {
  const { t, tp } = useLanguage();

  return (
    <footer className="footer">
      <WebCorner className="footer__web" />
      <div className="footer__thread thread" aria-hidden="true">
        <div className="thread__line" />
        <img src={spiderSvg} alt="" loading="lazy" />
      </div>

      <div className="footer__grid">
        <div className="footer__brand">
          <div>
            <span className="footer__mark th-s">
              <SpiderMark size={20} />
            </span>
            <span className="nav__mono footer__mono th-p" aria-hidden="true">
              AJ
            </span>
            <span className="footer__name">
              <Dual spidey="AYMEN JALLOULI" pro="Aymen Jallouli" />
            </span>
          </div>
          <p className="footer__tag">
            <TT k="footer.tagline" />
          </p>
        </div>

        <div className="footer__links">
          {LINKS.map((l) => (
            <a key={l.id} href={`${base}#${l.id}`}>
              <Dual spidey={t(`nav.${l.key}`)} pro={tp(`nav.${l.key}`)} />
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
