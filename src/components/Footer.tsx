import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:jajoseph.antony18@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/joseph-b-antony-70',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/joseph-b-antony-70',
    icon: Github,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Joseph Antony
          </p>
        </div>
      </div>
    </footer>
  );
}
