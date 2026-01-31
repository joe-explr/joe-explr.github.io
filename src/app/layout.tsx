import type { Metadata } from 'next';
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className={`${ibmPlexSans.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-[#fafaf9] text-stone-700 antialiased dark:bg-stone-900 dark:text-stone-300 transition-colors">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
