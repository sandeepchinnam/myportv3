
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Magnetic } from './ui/magnetic';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <footer className="py-16 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-background-dark border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-display font-bold">Portfolio</div>
            
            <div className="flex gap-4 items-center justify-center">
              {socialLinks.map((link) => (
                <Magnetic key={link.label} intensity={0.5} range={100}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-neutral-800 hover:bg-accent hover:text-white dark:hover:bg-accent p-3 rounded-full transition-colors duration-300 shadow-sm"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center text-neutral-500 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
