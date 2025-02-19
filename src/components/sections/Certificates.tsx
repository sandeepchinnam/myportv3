
const certificates = [
  {
    title: "Advanced Web Development",
    issuer: "Tech Academy",
    date: "2023",
    image: "/placeholder.svg"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Design Institute",
    date: "2023",
    image: "/placeholder.svg"
  },
  {
    title: "Cloud Architecture",
    issuer: "Cloud Experts",
    date: "2022",
    image: "/placeholder.svg"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground">
            Certificates
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 dark:text-white">
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="aspect-[4/3] mb-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{cert.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{cert.issuer}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
