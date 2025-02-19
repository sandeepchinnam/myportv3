
const Profile = () => {
  return (
    <section id="profile" className="py-20 dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-accent dark:bg-accent-foreground/10 rounded-full text-accent-foreground">
            Profile
          </span>
          <div className="grid md:grid-cols-[2fr,3fr] gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white">
                About Me
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                I'm a passionate developer with over 5 years of experience in creating digital solutions. My journey in tech has been driven by a desire to build meaningful and impactful applications.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Education</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">MSc in Computer Science, Tech University</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Experience</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">Senior Developer at Tech Corp</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Location</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
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
