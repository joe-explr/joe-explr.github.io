import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  readingTime?: string;
}

export default function BlogCard({ title, description, slug, date, readingTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          {readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
      </article>
    </Link>
  );
}
