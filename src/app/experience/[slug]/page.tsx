import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { getExperiences, getExperienceBySlug } from '@/lib/content';
import MarkdownContent from '@/components/MarkdownContent';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const experiences = getExperiences();
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    return { title: 'Experience Not Found' };
  }

  return {
    title: `${experience.meta.title} at ${experience.meta.company}`,
    description: experience.meta.description,
  };
}

export default function ExperiencePage({ params }: Props) {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16">
      <Link
        href="/#experience"
        className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
      >
        ← Back to Home
      </Link>

      <article className="mt-10">
        <header className="mb-10">
          <h1 className="font-serif text-3xl text-stone-900 mb-2">
            {experience.meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-stone-600 mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {experience.meta.company}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {experience.meta.period}
            </span>
            {experience.meta.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {experience.meta.location}
              </span>
            )}
          </div>

          <p className="text-lg text-stone-600 leading-relaxed">
            {experience.meta.description}
          </p>
        </header>

        <div className="prose">
          <MarkdownContent content={experience.content} />
        </div>
      </article>
    </div>
  );
}
