import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="font-serif text-6xl text-stone-200 mb-4">404</h1>
      <p className="text-stone-500 mb-8">
        Page not found.
      </p>
      <Link
        href="/"
        className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
      >
        Go home →
      </Link>
    </div>
  );
}
