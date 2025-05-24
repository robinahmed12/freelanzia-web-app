import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-primary mt-20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image (Hidden on mobile) */}
          <div className="hidden md:block w-full lg:w-1/3 relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/group-creative-people-analyzing-result-work_329181-15529.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740"
              alt="Freelancers collaborating"
              className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-all duration-500" />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              <span className="text-accent">Connecting</span> Talent with
              Opportunity
            </h2>
            <p className="text-secondary mb-6 text-lg">
              Our platform bridges the gap between skilled professionals and
              those who need their expertise.
            </p>

            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg transition-all hover:bg-orange-50 dark:hover:bg-gray-700 hover:shadow-md">
                <h3 className="font-semibold text-accent">For Clients</h3>
                <p className="text-secondary">
                  Find the perfect freelancer for any task, any budget, any
                  deadline.
                </p>
              </div>

              <div className="bg-secondary p-4 rounded-lg transition-all hover:bg-orange-50 dark:hover:bg-gray-700 hover:shadow-md">
                <h3 className="font-semibold text-accent">For Freelancers</h3>
                <p className="text-secondary">
                  Discover projects that match your skills and grow your
                  portfolio.
                </p>
              </div>
            </div>

            <button className="btn-orange mt-6 px-6 py-3 rounded-full hover:shadow-lg transition-all">
              Join Our Community
            </button>
          </div>

          {/* Right Image (Hidden on mobile) */}
          <div className="hidden md:block w-full lg:w-1/3 relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/designer-his-clients-are-having-fun_85574-7799.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740"
              alt="Task being completed"
              className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-all duration-500" />
          </div>
        </div>

        {/* Mobile Images (Stacked) */}
        <div className="mt-12 md:hidden flex flex-col gap-6">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/group-creative-people-analyzing-result-work_329181-15529.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740"
              alt="Freelancers collaborating"
              className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-all duration-500" />
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/designer-his-clients-are-having-fun_85574-7799.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740"
              alt="Task being completed"
              className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
