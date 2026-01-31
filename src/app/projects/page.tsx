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
        <h1 className="font-serif text-2xl text-stone-900 mb-3">Projects</h1>
        <p className="text-stone-500">
          Systems, compilers, and open source work.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-5 border border-stone-200 rounded-lg hover:border-stone-300 hover:bg-stone-50 transition-all"
            >
              <h2 className="text-stone-800 font-medium group-hover:text-stone-900 transition-colors mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed line-clamp-2 mb-3">
                {project.description}
              </p>
              {project.date && (
                <span className="text-xs text-stone-400">
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
        <p className="text-stone-400 py-12">No projects yet.</p>
      )}
    </div>
  );
}
