
const projects = [
  {
    title: "Project One",
    description: "A comprehensive web application built with React and Node.js",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with real-time updates",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "AI-powered data visualization dashboard",
    image: "/placeholder.svg",
    tags: ["Python", "React", "D3.js"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground hover:scale-105 transition-transform duration-200">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-accent-foreground/70">
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                className="group block"
              >
                <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-foreground transition-colors duration-200 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-700 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
