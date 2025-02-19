
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import Profile from '@/components/sections/Profile';
import Publications from '@/components/sections/Publications';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Profile />
      <Publications />
    </div>
  );
};

export default Index;
