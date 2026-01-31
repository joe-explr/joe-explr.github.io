import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:jajoseph.antony18@gmail.com',
    icon: Mail,
    color: 'text-stone-600 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/joseph-b-antony-70',
    icon: Github,
    color: 'text-stone-900 hover:text-black dark:text-stone-100 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/joseph-b-antony-70',
    icon: Linkedin,
    color: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 py-10 mt-16 dark:border-stone-700/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${link.color} transition-colors`}
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          
          <p className="text-stone-400 text-xs dark:text-stone-500">
            &copy; {new Date().getFullYear()} Joseph Antony
          </p>
        </div>
      </div>
    </footer>
  );
}
