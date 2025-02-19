
const Profile = () => {
  return (
    <section id="profile" className="relative py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(124,58,237,0.05),transparent_25%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(124,58,237,0.05),transparent_25%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground hover:scale-105 transition-transform duration-200">
            Profile
          </span>
          <div className="grid md:grid-cols-[2fr,3fr] gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-foreground to-accent-foreground/70">
                About Me
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
                I'm a passionate developer with over 5 years of experience in creating digital solutions. My journey in tech has been driven by a desire to build meaningful and impactful applications.
              </p>
              <div className="space-y-4">
                <div className="group">
                  <h3 className="font-semibold mb-2 dark:text-white group-hover:text-accent-foreground transition-colors duration-200">Education</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 group-hover:translate-x-1 transition-transform duration-200">MSc in Computer Science, Tech University</p>
                </div>
                <div className="group">
                  <h3 className="font-semibold mb-2 dark:text-white group-hover:text-accent-foreground transition-colors duration-200">Experience</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 group-hover:translate-x-1 transition-transform duration-200">Senior Developer at Tech Corp</p>
                </div>
                <div className="group">
                  <h3 className="font-semibold mb-2 dark:text-white group-hover:text-accent-foreground transition-colors duration-200">Location</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 group-hover:translate-x-1 transition-transform duration-200">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
