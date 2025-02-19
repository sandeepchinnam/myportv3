
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
    <section id="publications" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent rounded-full text-accent-foreground">
            Publications
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Research & Articles
          </h2>
          
          <div className="space-y-8">
            {publications.map((pub) => (
              <a
                key={pub.title}
                href={pub.link}
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                    <p className="text-neutral-600 mb-2">{pub.description}</p>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <span>{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent">
                      →
                    </span>
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

export default Publications;
