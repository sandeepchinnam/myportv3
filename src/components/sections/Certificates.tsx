
import { Meteors } from "@/components/ui/meteors";

const certificates = [
  {
    title: "Advanced Web Development",
    issuer: "Tech Academy",
    date: "2023"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Design Institute",
    date: "2023"
  },
  {
    title: "Cloud Architecture",
    issuer: "Cloud Experts",
    date: "2022"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground hover:scale-105 transition-transform duration-200">
            Certificates
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-accent-foreground/70">
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="group relative bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50 overflow-hidden"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-accent-foreground transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">{cert.issuer}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{cert.date}</p>
                
                {/* Meteor effect */}
                <Meteors number={10} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
