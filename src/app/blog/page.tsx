import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on engineering and systems.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-16 py-16">
      <header className="mb-12">
        <h1 className="font-serif text-2xl text-stone-900 mb-3 dark:text-stone-50">Blog</h1>
        <p className="text-stone-500 dark:text-stone-400">
          Thoughts on engineering and systems.
        </p>
      </header>

      {posts.length > 0 ? (
        <ul className="divide-y divide-stone-200/60 dark:divide-stone-700/60">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-6"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h2 className="text-stone-800 group-hover:text-stone-600 transition-colors dark:text-stone-100 dark:group-hover:text-stone-300">
                    {post.title}
                  </h2>
                  <span className="text-xs text-stone-400 tabular-nums shrink-0 dark:text-stone-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-2 dark:text-stone-400">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-400 py-12 dark:text-stone-500">No posts yet.</p>
      )}
    </div>
  );
}
