import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-6xl font-light text-gray-200 mb-4">404</h1>
      <p className="text-gray-500 mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        Go home →
      </Link>
    </div>
  );
}
