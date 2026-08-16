import HomePage from '@/components/HomePage';
import { buildMetadata, homeJsonLd, JsonLd, pagePaths } from '@/lib/seo';

export const metadata = buildMetadata({
  lang: 'en',
  paths: pagePaths.home,
  title: 'Aymen Jallouli — Freelance Full Stack & DevOps Developer in Tunis',
  description:
    'Freelance Full Stack developer in Tunis: React, Node.js, Django and Spring Boot web applications, microservices and AWS cloud. 20+ projects delivered, from scoping to production.',
  keywords: [
    'Aymen Jallouli',
    'full stack developer Tunisia',
    'freelance web developer Tunis',
    'software engineer Tunisia',
    'React developer Tunisia',
    'DevOps freelance Tunisia',
    'hire full stack developer',
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd('en')} />
      <HomePage />
    </>
  );
}
