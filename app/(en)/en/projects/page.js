import ProjectsIndex from '@/components/ProjectsIndex';
import { buildMetadata, projectsJsonLd, JsonLd, pagePaths } from '@/lib/seo';

export const metadata = buildMetadata({
  lang: 'en',
  paths: pagePaths.projects,
  title: 'Projects & work — Aymen Jallouli, full stack developer',
  description:
    'Every project delivered: full stack React and Node.js applications, Spring Boot microservices, DevOps pipelines and showcase websites in Tunis, Gabès, Sousse, Ariana and Gammarth.',
  keywords: [
    'web developer portfolio Tunisia',
    'React projects Tunisia',
    'showcase website Gabès',
    'showcase website Tunis',
    'showcase website Sousse',
    'web developer Ariana',
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={projectsJsonLd('en')} />
      <ProjectsIndex />
    </>
  );
}
