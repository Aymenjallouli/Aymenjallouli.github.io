import HomePage from '@/components/HomePage';
import { buildMetadata, homeJsonLd, JsonLd, pagePaths } from '@/lib/seo';

export const metadata = buildMetadata({
  lang: 'fr',
  paths: pagePaths.home,
  title: 'Aymen Jallouli — Développeur Full Stack & DevOps freelance à Tunis',
  description:
    'Développeur Full Stack freelance à Tunis : applications web React, Node.js, Django et Spring Boot, microservices et cloud AWS. 20+ projets livrés, du cadrage à la production.',
  keywords: [
    'Aymen Jallouli',
    'développeur full stack Tunisie',
    'développeur freelance Tunis',
    'ingénieur logiciel Tunisie',
    'développeur React Tunisie',
    'création site vitrine Tunisie',
    'DevOps freelance Tunis',
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd('fr')} />
      <HomePage />
    </>
  );
}
