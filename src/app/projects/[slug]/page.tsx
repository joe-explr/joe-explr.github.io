import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { getProjects, getProjectBySlug } from '@/lib/content';
import MarkdownContent from '@/components/MarkdownContent';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.meta.title,
    description: project.meta.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16">
      <Link
        href="/projects"
        className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
      >
        ← Projects
      </Link>

      <article className="mt-10">
        <header className="mb-10">
          <h1 className="font-serif text-2xl text-stone-900 mb-4">
            {project.meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-stone-400">
            {project.meta.date && (
              <time>
                {new Date(project.meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </time>
            )}
            {project.meta.tags && project.meta.tags.length > 0 && (
              <>
                <span>·</span>
                {project.meta.tags.map((tag: string, i: number) => (
                  <span key={tag}>
                    {tag}{i < project.meta.tags.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </>
            )}
            {project.meta.github && (
              <>
                <span>·</span>
                <a
                  href={project.meta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-stone-500 hover:text-stone-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </>
            )}
          </div>
        </header>

        <div className="prose">
          <MarkdownContent content={project.content} />
        </div>
      </article>
    </div>
  );
}
