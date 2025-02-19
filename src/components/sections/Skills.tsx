
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
  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent rounded-full text-accent-foreground">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div
                key={skillSet.category}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-neutral-600"
                    >
                      <span className="w-2 h-2 bg-accent-foreground rounded-full mr-2"></span>
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
