
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "RESTful APIs"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Figma"]
  },
];

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef}
      id="skills" 
      className={`py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900 transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground hover:scale-105 transition-transform duration-200">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-accent-foreground/70">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div
                key={skillSet.category}
                className={`group p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50 transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h3 className="text-xl font-semibold mb-4 dark:text-white group-hover:text-accent-foreground transition-colors duration-200">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-neutral-600 dark:text-neutral-300 hover:text-accent-foreground dark:hover:text-white transition-colors duration-200"
                    >
                      <span className="w-2 h-2 bg-accent-foreground/70 dark:bg-accent-foreground/70 rounded-full mr-2 group-hover:scale-125 transition-transform duration-200"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
