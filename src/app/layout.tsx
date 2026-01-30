import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Joseph Antony - Software Engineer',
    template: '%s — Joseph Antony',
  },
  description:
    'Backend Software Engineer building scalable distributed systems.',
  keywords: [
    'Backend Engineer',
    'Software Engineer',
    'Java',
    'Spring Boot',
    'Distributed Systems',
  ],
  authors: [{ name: 'Joseph Antony' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
