import { Metadata } from 'next';
import Link from 'next/link';
import { getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Software engineering projects including distributed systems, compilers, and more.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">
          Projects
        </h1>
        <p className="text-gray-500">
          A collection of projects from distributed systems to compilers.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className="space-y-1">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <article className="py-5 -mx-4 px-4 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h2>
                  {project.date && (
                    <span className="text-sm text-gray-400 shrink-0">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center py-12">
          No projects yet.
        </p>
      )}
    </div>
  );
}
