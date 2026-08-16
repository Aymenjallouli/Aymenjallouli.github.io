import Link from 'next/link';

import '@/styles/spidey.css';

/**
 * With one root layout per locale, the global 404 sits outside both of them and
 * has to render its own <html>/<body>. Kept dependency-free for that reason,
 * and in the default locale since it has no route to infer a language from.
 */
export const metadata = {
  title: 'Page not found — Aymen Jallouli',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="notfound">
          <p className="notfound__code">404</p>
          <h1 className="notfound__title">THIS PAGE SLIPPED THROUGH THE WEB.</h1>
          <p className="notfound__text">
            The link is either out of date or lost a character on the way here.
          </p>
          <div className="notfound__links">
            <Link className="btn btn--red" href="/">
              BACK TO HOME
            </Link>
            <Link className="btn btn--yellow" href="/projects">
              SEE THE PROJECTS
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
