import type { Metadata } from 'next';
import { Inter, Crimson_Pro } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const crimson = Crimson_Pro({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Joseph Antony',
    template: '%s — Joseph Antony',
  },
  description:
    'Software Engineer building scalable distributed systems.',
  keywords: [
    'Systems Engineer',
    'Software Engineer',
    'Java',
    'Go',
    'C++',
    'Rust',
    'Spring Boot',
    'Distributed Systems',
    'Compilers',
  ],
  authors: [{ name: 'Joseph Antony' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body className="font-sans bg-[#fafaf9] text-stone-700 antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
