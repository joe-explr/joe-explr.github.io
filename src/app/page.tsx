import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Download, ArrowRight } from 'lucide-react';
import { getProjects, getExperiences } from '@/lib/content';

const skills = {
  'Languages': ['Java', 'Go', 'C++', 'Rust', 'Python'],
  'Backend': ['Spring Boot', 'Microservices', 'REST APIs'],
  'Data': ['MySQL', 'MongoDB', 'Redis', 'Kafka'],
  'Infrastructure': ['AWS', 'GCP', 'Docker', 'Kubernetes'],
};

const education = [
  {
    institution: 'Stony Brook University',
    degree: 'M.S. Computer Science',
    period: '2024–2026',
    description: 'Focus on Distributed Systems, Operating Systems, and Computer Architecture.',
  },
  {
    institution: 'Visvesvaraya Technological University',
    degree: 'B.E. Information Science',
    period: '2016–2020',
    description: 'Foundation in Computer Science fundamentals, Data Structures, and Algorithms.',
  },
];

export default function Home() {
  const projects = getProjects().slice(0, 4);
  const experiences = getExperiences();

  return (
    <div>
      {/* Hero - Full Width */}
      <section className="w-full px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left - Text Content */}
            <div className="flex-1 order-2 lg:order-1">
              <p className="text-stone-500 text-lg mb-2">Hello, I&apos;m</p>
              <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-4">
                Joseph B Antony
              </h1>
              <p className="text-xl lg:text-2xl text-stone-700 font-medium mb-6">
                Software Engineer
              </p>
              <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-8">
                Experienced in building distributed systems, scalable microservices and cloud infrastructure. 
                Currently pursuing M.S. in Computer Science at Stony Brook University.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:jajoseph.antony18@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium"
                >
                  Contact Me
                </a>
                <a
                  href="/Joseph_CV_Backend.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 hover:border-stone-400 transition-colors font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>

              <div className="flex gap-6 mt-8 text-sm">
                <a
                  href="https://github.com/joseph-b-antony-70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/joseph-b-antony-70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <Image
                src="/profile.svg"
                alt="Joseph B Antony"
                width={320}
                height={320}
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-stone-100 shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of content - Contained width */}
      <div className="max-w-5xl mx-auto px-6 lg:px-16">

      {/* Experience */}
      <section id="experience" className="py-12 border-t border-stone-200/60">
        <h2 className="font-serif text-2xl text-stone-900 mb-10">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-stone-200" />
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-stone-400" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg text-stone-800 font-medium">{exp.title}</h3>
                    <p className="text-stone-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-stone-400 tabular-nums whitespace-nowrap">{exp.period}</span>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-3">{exp.description}</p>
                
                <Link
                  href={`/experience/${exp.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800 transition-colors group"
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
      <section className="py-12 border-t border-stone-200/60">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-2xl text-stone-900">Projects</h2>
          <Link
            href="/projects"
            className="text-stone-600 hover:text-stone-900 transition-colors"
          >
            See all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative block p-6 border border-stone-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-stone-300 hover:shadow-md"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-lg text-stone-800 font-medium group-hover:text-stone-900 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-500 line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  {project.date && (
                    <span className="text-sm text-stone-400">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  )}
                  <span className="text-sm text-stone-500 group-hover:text-stone-700 transition-colors inline-flex items-center gap-1">
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
      <section className="py-12 border-t border-stone-200/60">
        <h2 className="font-serif text-2xl text-stone-900 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm text-stone-500 uppercase tracking-wide mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-stone-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-12 border-t border-stone-200/60">
        <h2 className="font-serif text-2xl text-stone-900 mb-10">Education</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-stone-200" />
          
          <div className="space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-stone-400" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg text-stone-800 font-medium">{edu.institution}</h3>
                    <p className="text-stone-600">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-stone-400 tabular-nums whitespace-nowrap">{edu.period}</span>
                </div>
                
                <p className="text-stone-500 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
