import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const FeatureTask = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://freelanzia-server.vercel.app/featured-tasks?t=${Date.now()}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();

        if (!result.success) throw new Error(result.error || "Failed to load");

        const validTasks = result.data
          .map((task) => ({
            ...task,
            deadline: task.deadline ? new Date(task.deadline) : null,
            budget: task.budget || "Not specified",
            category: task.category || "General",
          }))
          .filter((task) => task.title);

        setTasks(validTasks);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-orange-600 dark:text-orange-400 uppercase rounded-full bg-orange-100 dark:bg-orange-900/30 mb-4">
            Urgent Tasks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-orange-50">
            Upcoming{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Deadlines
            </span>
          </h2>
          <p className="text-gray-500 dark:text-orange-200 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Tasks with the most urgent deadlines - Don't miss these
            opportunities
          </p>
          <div className="mt-6 w-24 h-1.5 bg-orange-500 dark:bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl h-96"
              />
            ))}
          </div>
        ) : tasks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <FeatureCard task={task} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-16 lg:py-20">
            <div className="inline-block p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-orange-500 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 dark:text-orange-200 mb-2">
              No tasks available
            </h3>
            <p className="text-gray-500 dark:text-orange-300 max-w-md mx-auto">
              We couldn't find any featured tasks at the moment. Please check
              back later!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureTask;
