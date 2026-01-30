import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:jajoseph.antony18@gmail.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/joseph-b-antony-70',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/joseph-b-antony-70',
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 py-10 mt-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-stone-400 hover:text-stone-600 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          
          <p className="text-stone-400 text-xs">
            &copy; {new Date().getFullYear()} Joseph Antony
          </p>
        </div>
      </div>
    </footer>
  );
}
