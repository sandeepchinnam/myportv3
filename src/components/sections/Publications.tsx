
import { Meteors } from "@/components/ui/meteors";

const publications = [
  {
    title: "Modern Web Development Practices",
    journal: "Tech Journal",
    year: "2023",
    description: "An in-depth analysis of current web development trends and best practices.",
    link: "#"
  },
  {
    title: "The Future of User Interfaces",
    journal: "UX Magazine",
    year: "2023",
    description: "Exploring upcoming trends in user interface design and interaction.",
    link: "#"
  },
  {
    title: "Cloud Computing: A New Era",
    journal: "Cloud Tech Review",
    year: "2022",
    description: "Understanding the impact of cloud computing on modern software architecture.",
    link: "#"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground hover:scale-105 transition-transform duration-200">
            Publications
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-accent-foreground/70">
            Research & Articles
          </h2>
          
          <div className="space-y-8">
            {publications.map((pub) => (
              <a
                key={pub.title}
                href={pub.link}
                className="group block"
              >
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-accent-foreground transition-colors duration-200">
                        {pub.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-2">{pub.description}</p>
                      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <span>{pub.journal}</span>
                        <span>•</span>
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent dark:bg-accent-foreground/10 text-accent-foreground group-hover:scale-110 group-hover:bg-accent-foreground group-hover:text-white transition-all duration-200">
                        →
                      </span>
                    </div>
                  </div>
                  
                  {/* Meteor effect */}
                  <Meteors number={10} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
