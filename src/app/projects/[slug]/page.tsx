import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">
            {project.meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
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
                <div className="flex flex-wrap gap-2">
                  {project.meta.tags.map((tag: string) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
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
