
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block animate-fadeIn opacity-0 [animation-delay:200ms] px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground">
            Welcome to my portfolio
          </span>
          <h1 className="animate-fadeIn opacity-0 [animation-delay:400ms] text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white">
            Creating Digital Experiences That Matter
          </h1>
          <p className="animate-fadeIn opacity-0 [animation-delay:600ms] text-neutral-600 dark:text-neutral-300 text-lg mb-8">
            I'm a passionate developer focused on building beautiful, functional, and user-centered digital experiences.
          </p>
          <div className="animate-fadeIn opacity-0 [animation-delay:800ms] flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#profile"
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200 dark:text-white"
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
