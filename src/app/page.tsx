import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getProjects } from '@/lib/content';

const skills = [
  { category: 'Languages', items: ['Java', 'Go', 'C++', 'Rust', 'Python'] },
  { category: 'Backend', items: ['Spring Boot', 'Microservices', 'REST APIs', 'Hibernate'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB', 'Redis', 'Oracle'] },
  { category: 'Infrastructure', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'] },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Sigmoid Analytics',
    period: '2024',
    description: 'Built real-time data processing microservices with Spring Boot and Kafka, reducing latency by 40%.',
  },
  {
    title: 'Software Engineer → Senior',
    company: 'Oracle Cerner',
    period: '2020 — 2024',
    description: 'Developed microservices delivering APIs to thousands of users with 99.9% availability. Led monolith to microservices migration.',
  },
];

export default function Home() {
  const projects = getProjects().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="py-20">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">
          Joseph Antony
        </h1>
        <p className="text-lg text-gray-500 mb-6 leading-relaxed max-w-xl">
          Backend engineer with 4+ years building distributed systems and cloud infrastructure. 
          Currently pursuing M.S. in Computer Science at Stony Brook.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:jajoseph.antony18@gmail.com"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            jajoseph.antony18@gmail.com
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="https://github.com/joseph-b-antony-70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
          >
            GitHub
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="https://linkedin.com/in/joseph-b-antony-70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
          >
            LinkedIn
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 border-t border-gray-100">
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">{exp.title}</h3>
                  <p className="text-gray-500">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 shrink-0">{exp.period}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 border-t border-gray-100">
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 border-t border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-1"
          >
            View all
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <article className="py-4 -mx-4 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {project.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-12 border-t border-gray-100">
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Education
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-gray-900">Stony Brook University</h3>
                <p className="text-gray-500">M.S. Computer Science</p>
              </div>
              <span className="text-sm text-gray-400">2024 — 2026</span>
            </div>
          </div>
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-gray-900">Visvesvaraya Technological University</h3>
                <p className="text-gray-500">B.E. Information Science</p>
              </div>
              <span className="text-sm text-gray-400">2016 — 2020</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
