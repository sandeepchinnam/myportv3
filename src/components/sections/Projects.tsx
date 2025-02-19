
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent rounded-full text-accent-foreground">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                className="group block"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-neutral-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-neutral-100 rounded-full"
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
