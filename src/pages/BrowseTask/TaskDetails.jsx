import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {
  FaShoppingCart,
  FaCode,
  FaCalendarAlt,
  FaDollarSign,
} from "react-icons/fa";

const TaskDetails = () => {
  const [bidsCount, setBidsCount] = useState(0);
  const formatDeadline = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const data = useLoaderData();
  console.log(data);

  return (
    <>
      {/* Top Message */}
      <h2 className="text-xl mt-12 font-bold text-center mb-4">
        Your bids: {bidsCount} opportunity{bidsCount !== 1 ? "ies" : ""}
      </h2>
      <div className="max-w-3xl  mx-auto my-32 p-6 bg-white rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-4">
              <FaShoppingCart className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
              <div className="flex items-center mt-1">
                <FaCode className="text-gray-500 mr-2" />
                <span className="text-gray-600">{data.category}</span>
              </div>
            </div>
          </div>
          <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium">
            Active
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">
              <span className="font-medium">Deadline:</span>{" "}
              {formatDeadline(data.deadline)}
            </span>
          </div>

          <div className="flex items-center">
            <FaDollarSign className="text-gray-500 mr-2" />
            <span className="text-gray-700">
              <span className="font-medium">Budget:</span> ${data.budget}
            </span>
          </div>

          <button onClick={()=>setBidsCount((prev) => prev + 1)} className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm">
            Bid Now
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
