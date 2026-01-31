import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Download, ArrowRight } from 'lucide-react';
import { getProjects, getExperiences, getHomeContent } from '@/lib/content';

export default function Home() {
  const projects = getProjects().slice(0, 4);
  const experiences = getExperiences();
  const home = getHomeContent();

  return (
    <div>
      {/* Hero - Full Width */}
      <section className="w-full px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left - Text Content */}
            <div className="flex-1 order-2 lg:order-1">
              <p className="text-stone-500 text-lg mb-2 dark:text-stone-400">{home.greeting}</p>
              <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-4 dark:text-stone-50">
                {home.name}
              </h1>
              <p className="text-xl lg:text-2xl text-stone-700 font-medium mb-6 dark:text-stone-200">
                {home.title}
              </p>
              <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-8 text-justify dark:text-stone-300">
                {home.bio}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {home.email && (
                  <a
                    href={`mailto:${home.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
                  >
                    Contact Me
                  </a>
                )}
                {home.cvPath && (
                  <a
                    href={home.cvPath}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 hover:border-stone-400 transition-colors font-medium dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800 dark:hover:border-stone-500"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                )}
              </div>

              <div className="flex gap-6 mt-8 text-sm">
                {home.github && (
                  <a
                    href={home.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-1 dark:text-stone-400 dark:hover:text-stone-100"
                  >
                    GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {home.linkedin && (
                  <a
                    href={home.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-1 dark:text-stone-400 dark:hover:text-stone-100"
                  >
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <Image
                src={home.profileImage}
                alt={home.name}
                width={320}
                height={320}
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-stone-100 shadow-lg dark:border-stone-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of content - Contained width */}
      <div className="max-w-5xl mx-auto px-6 lg:px-16">

      {/* Experience */}
      <section id="experience" className="py-12 border-t border-stone-200/60 dark:border-stone-700/60">
        <h2 className="font-serif text-2xl text-stone-900 mb-10 dark:text-stone-50">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700" />
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-stone-400 dark:bg-stone-500" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg text-stone-800 font-medium dark:text-stone-100">{exp.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-stone-400 tabular-nums whitespace-nowrap dark:text-stone-500">{exp.period}</span>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-3 dark:text-stone-300">{exp.description}</p>
                
                <Link
                  href={`/experience/${exp.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800 transition-colors group dark:text-stone-400 dark:hover:text-stone-200"
                >
                  View details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 border-t border-stone-200/60 dark:border-stone-700/60">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-50">Projects</h2>
          <Link
            href="/projects"
            className="text-stone-600 hover:text-stone-900 transition-colors dark:text-stone-400 dark:hover:text-stone-200"
          >
            See all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative block p-6 border border-stone-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-stone-300 hover:shadow-md dark:border-stone-700 dark:hover:border-stone-600"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-stone-800 dark:via-stone-850 dark:to-stone-800" />
              
              <div className="relative z-10">
                <h3 className="text-lg text-stone-800 font-medium group-hover:text-stone-900 transition-colors duration-300 mb-2 dark:text-stone-100 dark:group-hover:text-stone-50">
                  {project.title}
                </h3>
                <p className="text-stone-500 line-clamp-2 mb-3 dark:text-stone-400">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  {project.date && (
                    <span className="text-sm text-stone-400 dark:text-stone-500">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  )}
                  <span className="text-sm text-stone-500 group-hover:text-stone-700 transition-colors inline-flex items-center gap-1 dark:text-stone-400 dark:group-hover:text-stone-200">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 border-t border-stone-200/60 dark:border-stone-700/60">
        <h2 className="font-serif text-2xl text-stone-900 mb-10 dark:text-stone-50">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(home.skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm text-stone-500 uppercase tracking-wide mb-3 dark:text-stone-400">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-stone-700 dark:text-stone-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-12 border-t border-stone-200/60 dark:border-stone-700/60">
        <h2 className="font-serif text-2xl text-stone-900 mb-10 dark:text-stone-50">Education</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700" />
          
          <div className="space-y-10">
            {home.education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-stone-400 dark:bg-stone-500" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg text-stone-800 font-medium dark:text-stone-100">{edu.institution}</h3>
                    <p className="text-stone-600 dark:text-stone-400">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-stone-400 tabular-nums whitespace-nowrap dark:text-stone-500">{edu.period}</span>
                </div>
                
                <p className="text-stone-500 leading-relaxed dark:text-stone-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
