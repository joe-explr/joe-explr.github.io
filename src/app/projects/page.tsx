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
    <div className="max-w-5xl mx-auto px-6 lg:px-16 py-16">
      <header className="mb-12">
        <h1 className="font-serif text-2xl text-stone-900 mb-3 dark:text-stone-50">Projects</h1>
        <p className="text-stone-500 dark:text-stone-400">
          Systems, compilers, and open source work.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-5 border border-stone-200 rounded-lg hover:border-stone-300 hover:bg-stone-50 transition-all dark:border-stone-700 dark:hover:border-stone-600 dark:hover:bg-stone-800"
            >
              <h2 className="text-stone-800 font-medium group-hover:text-stone-900 transition-colors mb-2 dark:text-stone-100 dark:group-hover:text-stone-50">
                {project.title}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed line-clamp-2 mb-3 dark:text-stone-400">
                {project.description}
              </p>
              {project.date && (
                <span className="text-xs text-stone-400 dark:text-stone-500">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </span>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-stone-400 py-12 dark:text-stone-500">No projects yet.</p>
      )}
    </div>
  );
}
