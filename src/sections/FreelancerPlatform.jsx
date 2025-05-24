import {
  StarIcon,
  LightningBoltIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";

const FreelancerPlatform = () => {
  const featuredFreelancers = [
    {
      id: 1,
      name: "Alex Johnson",
      skills: ["Web Design", "UI/UX"],
      rating: 4.9,
      completedProjects: 127,
      rate: "$45/hr",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Miller",
      skills: ["Content Writing", "SEO"],
      rating: 4.8,
      completedProjects: 92,
      rate: "$35/hr",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "James Chen",
      skills: ["App Development", "React Native"],
      rating: 5.0,
      completedProjects: 215,
      rate: "$75/hr",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      skills: ["Graphic Design", "Branding"],
      rating: 4.7,
      completedProjects: 84,
      rate: "$50/hr",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 5,
      name: "Michael Thompson",
      skills: ["Digital Marketing", "PPC"],
      rating: 4.9,
      completedProjects: 156,
      rate: "$60/hr",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 6,
      name: "Priya Patel",
      skills: ["Data Analysis", "Python"],
      rating: 5.0,
      completedProjects: 112,
      rate: "$65/hr",
      image: "https://randomuser.me/api/portraits/women/71.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b mt-20 from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Top Talent
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-orange-50 mb-4">
            Featured Freelancers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-orange-200">
            Connect with our highest-rated professionals ready to tackle your
            projects
          </p>
        </div>

        {/* Freelancer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100 dark:border-orange-900/50 group"
            >
              {/* Freelancer Header */}
              <div className="p-6 flex items-start space-x-4">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full object-cover border-2 border-orange-200 dark:border-orange-700 group-hover:border-orange-500 transition-colors duration-300"
                    src={freelancer.image}
                    alt={freelancer.name}
                  />
                  <span className="absolute -bottom-1 -right-1 bg-orange-500 text-white p-1 rounded-full">
                    <CheckCircleIcon className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-orange-50 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {freelancer.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(freelancer.rating)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-orange-300">
                      {freelancer.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills & Details */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-orange-300">
                  <span className="flex items-center">
                    <LightningBoltIcon className="h-4 w-4 mr-1 text-orange-500" />
                    {freelancer.completedProjects} projects
                  </span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">
                    {freelancer.rate}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <button className="w-full btn-orange py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <span>Hire Now</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-800/50 transition-colors duration-300 group">
            Browse All Freelancers
            <svg
              className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreelancerPlatform;
