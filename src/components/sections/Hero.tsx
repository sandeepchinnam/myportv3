
import { ArrowRight } from 'lucide-react';
import { FloatingPaths } from '@/components/ui/background-paths';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-accent/10 to-white dark:from-neutral-800 dark:to-neutral-900">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.05),transparent_25%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.05),transparent_25%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block animate-fadeIn opacity-0 [animation-delay:200ms] px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground hover:scale-105 transition-transform duration-200">
            Welcome to my portfolio
          </span>
          <h1 className="animate-fadeIn opacity-0 [animation-delay:400ms] text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
            SANDEEP CHINNAM
          </h1>
          <p className="animate-fadeIn opacity-0 [animation-delay:600ms] text-neutral-600 dark:text-neutral-300 text-lg mb-8">
            To obtain an engaging and fulfilling role where I can apply my expertise, knowledge, and experience to make a meaningful impact and advance my career in a vibrant organization.
          </p>
          <div className="animate-fadeIn opacity-0 [animation-delay:800ms] flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full hover:bg-accent-foreground dark:hover:bg-accent-foreground hover:scale-105 transition-all duration-200"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#profile"
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:scale-105 transition-all duration-200 dark:text-white"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
