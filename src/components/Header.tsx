'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-stone-200/60 dark:border-stone-700/60">
      <nav className="max-w-6xl mx-auto px-6 lg:px-16 py-5">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-lg text-stone-900 hover:text-stone-600 transition-colors dark:text-stone-50 dark:hover:text-stone-300"
          >
            Joseph Antony
          </Link>
          
          <div className="flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-stone-900 dark:text-stone-50'
                      : 'text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'
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
              className="text-sm text-stone-500 hover:text-stone-700 transition-colors dark:text-stone-400 dark:hover:text-stone-200"
            >
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
