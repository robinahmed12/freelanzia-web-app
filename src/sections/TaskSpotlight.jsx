import { FiClock, FiDollarSign, FiStar, FiZap } from "react-icons/fi";

const TaskSpotlight = () => {
  const featuredTasks = [
    {
      id: 1,
      title: "Website Redesign",
      description:
        "Modern redesign for small business homepage with mobile responsiveness",
      skills: ["UI/UX", "React", "Tailwind"],
      budget: "$500-$800",
      deadline: "3 days",
      bids: 12,
      premium: true,
    },
    {
      id: 2,
      title: "Social Media Content",
      description:
        "Monthly content creation for Instagram & LinkedIn (8 posts + captions)",
      skills: ["Content Writing", "Graphic Design"],
      budget: "$300",
      deadline: "Ongoing",
      bids: 5,
      premium: false,
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build a fitness tracking iOS app with Firebase backend",
      skills: ["Swift", "Firebase", "HealthKit"],
      budget: "$1500+",
      deadline: "2 weeks",
      bids: 8,
      premium: true,
    },
     {
      id: 4,
      title: "E-commerce SEO Optimization",
      description: "Improve search rankings for handmade jewelry store with 50+ products",
      skills: ["SEO", "Keyword Research", "Shopify"],
      budget: "$400-$600",
      deadline: "1 week",
      bids: 7,
      premium: false
    },
    {
      id: 5,
      title: "Video Editing for YouTube Series",
      description: "Edit 8 episodes (15-20min each) with color grading and basic motion graphics",
      skills: ["Premiere Pro", "After Effects", "Color Grading"],
      budget: "$800-$1200",
      deadline: "10 days",
      bids: 15,
      premium: true
    },
    {
      id: 6,
      title: "Data Analysis Dashboard",
      description: "Create interactive Power BI dashboard for sales analytics with 3 data sources",
      skills: ["Power BI", "SQL", "Data Visualization"],
      budget: "$750 fixed",
      deadline: "5 days",
      bids: 9,
      premium: false
    }
  ];

  return (
    <section className="bg-secondary mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            <span className="text-accent">Task</span> Spotlight
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            High-impact opportunities waiting for your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-primary rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-primary group"
            >
              {task.premium && (
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 text-sm font-medium flex items-center">
                  <FiStar className="mr-1" />
                  <span>Premium Opportunity</span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {task.title}
                  </h3>
                  {task.premium && (
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full dark:bg-amber-900/30 dark:text-amber-200">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-3 text-secondary">{task.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {task.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/70 text-xs font-medium bg text-amber-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-primary flex justify-between items-center">
                  <div className="flex items-center text-sm text-secondary">
                    <FiClock className="mr-1" />
                    <span>{task.deadline}</span>
                  </div>
                  <div className="flex items-center text-sm text-secondary">
                    <FiDollarSign className="mr-1" />
                    <span>{task.budget}</span>
                  </div>
                  <div className="flex items-center text-sm text-secondary">
                    <FiZap className="mr-1 text-accent" />
                    <span>{task.bids} bids</span>
                  </div>
                </div>

                <button className="mt-6 w-full btn-orange py-2 rounded-lg flex items-center justify-center group-hover:scale-[1.02] transition-transform">
                  Place Your Bid
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 border-2 border-accent hover:bg-orange-200 dark:hover:bg-orange-800/50 text-accent rounded-full font-medium hover:bg-accent  transition-colors">
            View All Opportunities →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskSpotlight;
