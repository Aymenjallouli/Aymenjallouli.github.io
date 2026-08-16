import { notFound } from 'next/navigation';

import ProjectPage from '@/components/ProjectPage';
import { PROJECTS, getProject } from '@/lib/projects';
import { buildMetadata, projectMeta, projectJsonLd, JsonLd, pagePaths } from '@/lib/seo';

/** Prerender all 17 at build time — every one is a static file on the CDN. */
export const generateStaticParams = () => PROJECTS.map((p) => ({ slug: p.slug }));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const { title, description } = projectMeta(project, 'en');
  return buildMetadata({
    lang: 'en',
    paths: pagePaths.project(slug),
    title,
    description,
    image: project.img,
    type: 'article',
    keywords: [project.t, ...project.tech, ...project.cats, project.city, 'Aymen Jallouli'].filter(Boolean),
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd data={projectJsonLd(project, 'en')} />
      <ProjectPage slug={slug} />
    </>
  );
}
