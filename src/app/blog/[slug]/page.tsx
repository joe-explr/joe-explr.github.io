import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/content';
import MarkdownContent from '@/components/MarkdownContent';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16">
      <Link
        href="/blog"
        className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
      >
        ← Blog
      </Link>

      <article className="mt-10">
        <header className="mb-10">
          <h1 className="font-serif text-2xl text-stone-900 mb-4">
            {post.meta.title}
          </h1>
          
          <div className="flex items-center gap-3 text-sm text-stone-400">
            <time>
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.meta.readingTime && (
              <>
                <span>·</span>
                <span>{post.meta.readingTime}</span>
              </>
            )}
          </div>
        </header>

        <div className="prose">
          <MarkdownContent content={post.content} />
        </div>
      </article>
    </div>
  );
}
