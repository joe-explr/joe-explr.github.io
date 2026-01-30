'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-3xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
          >
            Joseph Antony
          </Link>
          
          <div className="flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="/Joseph_CV_Backend.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
