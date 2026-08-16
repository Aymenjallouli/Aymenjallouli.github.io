import ProjectsIndex from '@/components/ProjectsIndex';
import { buildMetadata, projectsJsonLd, JsonLd, pagePaths } from '@/lib/seo';

export const metadata = buildMetadata({
  lang: 'fr',
  paths: pagePaths.projects,
  title: 'Projets & réalisations — Aymen Jallouli, développeur full stack',
  description:
    'Toutes mes réalisations : applications full stack React et Node.js, microservices Spring Boot, pipelines DevOps et sites vitrines à Tunis, Gabès, Sousse, Ariana et Gammarth.',
  keywords: [
    'réalisations développeur Tunisie',
    'portfolio projets React Tunisie',
    'création site vitrine Gabès',
    'création site vitrine Tunis',
    'création site vitrine Sousse',
    'développeur web Ariana',
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={projectsJsonLd('fr')} />
      <ProjectsIndex />
    </>
  );
}
