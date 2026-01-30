import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getProjects } from '@/lib/content';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Sigmoid Analytics',
    period: '2024',
    description: 'Real-time data processing with Spring Boot and Kafka. 40% latency reduction.',
  },
  {
    title: 'Software Engineer → Senior',
    company: 'Oracle Cerner',
    period: '2020–2024',
    description: 'Microservices for healthcare systems. 99.9% API availability. Led monolith migration.',
  },
];

const skills = {
  'Languages': ['Java', 'Go', 'C++', 'Rust', 'Python'],
  'Backend': ['Spring Boot', 'Microservices', 'REST APIs'],
  'Data': ['MySQL', 'MongoDB', 'Redis', 'Kafka'],
  'Infrastructure': ['AWS', 'GCP', 'Docker', 'Kubernetes'],
};

export default function Home() {
  const projects = getProjects().slice(0, 4);

  return (
    <div className="max-w-2xl mx-auto px-6">
      {/* Hero */}
      <section className="py-16">
        <h1 className="font-serif text-2xl text-stone-900 mb-4">
          Joseph Antony
        </h1>
        <p className="text-stone-500 mb-1">
          Backend Software Engineer
        </p>
        <p className="text-stone-600 leading-relaxed mt-4 max-w-lg">
          Building distributed systems and cloud infrastructure for 4+ years. 
          Currently pursuing M.S. in Computer Science at Stony Brook University.
        </p>
        
        <div className="flex gap-4 mt-6 text-sm">
          <a
            href="mailto:jajoseph.antony18@gmail.com"
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            Email
          </a>
          <span className="text-stone-300">·</span>
          <a
            href="https://github.com/joseph-b-antony-70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-800 transition-colors inline-flex items-center gap-0.5"
          >
            GitHub
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <span className="text-stone-300">·</span>
          <a
            href="https://linkedin.com/in/joseph-b-antony-70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-800 transition-colors inline-flex items-center gap-0.5"
          >
            LinkedIn
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="py-10 border-t border-stone-200/60">
        <h2 className="font-serif text-lg text-stone-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="text-stone-800 font-medium">{exp.title}</h3>
                <span className="text-xs text-stone-400 tabular-nums">{exp.period}</span>
              </div>
              <p className="text-stone-500 text-sm mb-2">{exp.company}</p>
              <p className="text-stone-600 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-10 border-t border-stone-200/60">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-lg text-stone-900">Projects</h2>
          <Link
            href="/projects"
            className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
          >
            See all →
          </Link>
        </div>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-stone-800 group-hover:text-stone-600 transition-colors">
                    {project.title}
                  </span>
                  <span className="text-xs text-stone-400">
                    {project.date && new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="py-10 border-t border-stone-200/60">
        <h2 className="font-serif text-lg text-stone-900 mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs text-stone-400 uppercase tracking-wide mb-2">
                {category}
              </h3>
              <ul className="space-y-1">
                {items.map((skill) => (
                  <li key={skill} className="text-sm text-stone-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-10 border-t border-stone-200/60">
        <h2 className="font-serif text-lg text-stone-900 mb-8">Education</h2>
        <div className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h3 className="text-stone-800">Stony Brook University</h3>
              <p className="text-sm text-stone-500">M.S. Computer Science</p>
            </div>
            <span className="text-xs text-stone-400 tabular-nums">2024–2026</span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h3 className="text-stone-800">Visvesvaraya Technological University</h3>
              <p className="text-sm text-stone-500">B.E. Information Science</p>
            </div>
            <span className="text-xs text-stone-400 tabular-nums">2016–2020</span>
          </div>
        </div>
      </section>
    </div>
  );
}
