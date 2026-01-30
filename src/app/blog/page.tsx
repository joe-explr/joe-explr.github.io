import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on software engineering, distributed systems, and technology.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">
          Blog
        </h1>
        <p className="text-gray-500">
          Thoughts on engineering, systems, and learning.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="py-5 -mx-4 px-4 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-gray-400 shrink-0">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {post.description}
                </p>
                {post.readingTime && (
                  <span className="text-xs text-gray-400 mt-2 inline-block">
                    {post.readingTime}
                  </span>
                )}
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center py-12">
          No posts yet.
        </p>
      )}
    </div>
  );
}
