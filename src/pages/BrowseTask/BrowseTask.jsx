import React from "react";
import { Link, useLoaderData } from "react-router";
import BrowseCard from "./BrowseCard";

const BrowseTask = () => {
  const data = useLoaderData();

  // Handle loading/error states
  if (!data) {
    return <div>Loading tasks...</div>;
  }

  // Ensure data is always treated as an array
  const tasks = Array.isArray(data) ? data : [];

  return (
    <>
      <div className="min-h-screen mt-20 lg:px-0 px-4 bg-white  md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">
              Browse Available Tasks
            </h1>
            <p className="text-[#666] md:text-lg max-w-2xl mx-auto">
              Find the perfect task that matches your skills and expertise.
            </p>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {Array.isArray(data) &&
              tasks.map((task) => <BrowseCard key={task._id} task={task} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseTask;
