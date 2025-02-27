
import { Meteors } from "@/components/ui/meteors";

const projects = [
  {
    title: "Project One",
    description: "A comprehensive web application built with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with real-time updates",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "AI-powered data visualization dashboard",
    tags: ["Python", "React", "D3.js"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent/10 dark:bg-accent-foreground/10 rounded-full text-accent dark:text-accent-foreground hover:scale-105 transition-transform duration-200">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-foreground dark:text-foreground-dark">
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group block"
              >
                <div className="relative bg-card dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent dark:group-hover:text-accent-foreground transition-colors duration-200 text-foreground dark:text-foreground-dark">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-background dark:bg-background-dark rounded-full group-hover:bg-accent/10 group-hover:text-accent dark:group-hover:bg-accent-foreground/10 dark:group-hover:text-accent-foreground transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meteor effect */}
                  <Meteors number={15} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
