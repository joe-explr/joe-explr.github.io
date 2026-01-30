import { Metadata } from 'next';
import Link from 'next/link';
import { getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Software engineering projects.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="font-serif text-2xl text-stone-900 mb-3">Projects</h1>
        <p className="text-stone-500">
          Systems, compilers, and open source work.
        </p>
      </header>

      {projects.length > 0 ? (
        <ul className="divide-y divide-stone-200/60">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block py-6"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h2 className="text-stone-800 group-hover:text-stone-600 transition-colors">
                    {project.title}
                  </h2>
                  {project.date && (
                    <span className="text-xs text-stone-400 tabular-nums shrink-0">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  )}
                </div>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-400 py-12">No projects yet.</p>
      )}
    </div>
  );
}
