import Link from 'next/link';

import '@/styles/spidey.css';

/**
 * With one root layout per locale, the global 404 sits outside both of them and
 * has to render its own <html>/<body>. Kept dependency-free for that reason.
 */
export const metadata = {
  title: 'Page introuvable — Aymen Jallouli',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main className="notfound">
          <p className="notfound__code">404</p>
          <h1 className="notfound__title">CETTE PAGE A DISPARU DANS LE MULTIVERS.</h1>
          <p className="notfound__text">
            This page slipped through the web. Le lien est peut-être périmé ou mal recopié.
          </p>
          <div className="notfound__links">
            <Link className="btn btn--red" href="/">
              RETOUR À L’ACCUEIL
            </Link>
            <Link className="btn btn--yellow" href="/projets">
              VOIR LES PROJETS
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
